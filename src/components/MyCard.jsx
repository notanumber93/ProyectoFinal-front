import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import MyCardDetails from "./MyCardDetails";

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
                <Card.Subtitle>{props.year}</Card.Subtitle>
            </Card.Body>
            <Card.Footer>placeholder</Card.Footer>
            {modalDetails}
        </Card>
    );
};

export default MyCard;
