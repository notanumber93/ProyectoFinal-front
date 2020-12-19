import { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "react-bootstrap";
import MyCardDetails from "./MyCardDetails";
import StarRating from "./StarRating";
import { FaStar, FaHeart } from "react-icons/fa";
import useUserSession from "./userSession"; 

const MyCard = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const { store, actions } = useContext(Context);
    const [user, setUser] = useUserSession("user");
    const logged_user = JSON.parse(user);
    const [favorite, setFavorite] = useState(null);
    console.log(user.id);

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
        setFavorite(true);
        actions.addUserFavorites(logged_user.id, logged_user.auth_token, props.movie_id, props.year, props.poster, props.title);
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
                 {props.rate != undefined ?
                    <FaStar
                        className="star"
                        color="#ffc107"
                        size={20}
                    /> : null} {props.rate != undefined ? props.rate : null}
                </Card.Subtitle>
            </Card.Body>
            <Card.Footer>
                {props.show ? <StarRating user_id={logged_user.id} movie_id={props.movie_id} year={props.year} poster={props.poster} title={props.title} /> : null }
                {props.showFavorite ? 
                    <FaHeart
                    data-toggle="tooltip" 
                    data-placement="top"
                    title="Añadir a Favoritos"
                    onClick={(event) => handleFavorites(event)}
                    color={props.favorite || favorite ? "red" : "gray"}>  
                    </FaHeart> : null }
            </Card.Footer>
            {modalDetails}
        </Card>
    );
};

export default MyCard;

