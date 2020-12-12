import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import MyCardDetails from "./MyCardDetails";
import StarRating from "./StarRating";
import { FaStar } from "react-icons/fa";

const MyCard = (props) => {
    const [modalShow, setModalShow] = useState(false);

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
                    {props.rate_avg != undefined ? props.rate_avg : '-'}
                </Card.Subtitle>
            </Card.Body>
            <Card.Footer>
               <StarRating user_id={1} movie_id={props.movie_id}/>
            </Card.Footer>
            {modalDetails}
        </Card>
    );
};

export default MyCard;
