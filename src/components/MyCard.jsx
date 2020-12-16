import { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "react-bootstrap";
import MyCardDetails from "./MyCardDetails";
import StarRating from "./StarRating";
import { FaStar } from "react-icons/fa";

const MyCard = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const { store, actions } = useContext(Context);

    let modalDetails;
    if (modalShow) {
        modalDetails = (
            <MyCardDetails
                title={props.title}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        );
    } else {
        modalDetails = null;
    }

    const handleFavorites = (event) => {
        event.preventDefault();
        actions.addUserFavorites(store.logged_user.id, props.movie_id);
    };

    return (
        <Card
            style={{
                minWidth: "18rem",
                maxWidth: "18rem",
                marginBottom: "10px",
                marginTop: "10px",
            }}
        >
            <Card.Img
                variant="top"
                src={props.poster}
                onClick={() => setModalShow(true)}
                style={{
                    cursor: "pointer",
                }}
            />
            <Card.Body
                onClick={() => setModalShow(true)}
                style={{ cursor: "pointer" }}
            >
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle>
                    {props.year}<br></br>
                { <FaStar
                        className="star"
                        color="#ffc107"
                        size={20}
                    /> }
                    {props.rate_avg !== undefined ? props.rate_avg : '-'}
                </Card.Subtitle>
            </Card.Body>
            <Card.Footer>
               { props.show ? <StarRating user_id={1} movie_id={props.movie_id} /> : null }
                <button type="button" 
                className="btn btn-secondary" 
                data-toggle="tooltip" 
                data-placement="top"
                title="Añadir a Favoritos"
                onClick={(event) => handleFavorites(event)}>
                    &hearts;
                </button>
            </Card.Footer>
            {modalDetails}
        </Card>
    );
};

export default MyCard;
