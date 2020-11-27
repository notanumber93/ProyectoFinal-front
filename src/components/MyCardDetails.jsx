import { Col, Container, Image, Modal, Row } from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

const MyCardDetails = (props) => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getMovieDetails(props.title);
  }, []);

  return (
    <Modal {...props} size="lg" aria-labelledby="movie-details" centered>
      <Modal.Header closeButton>
        <Modal.Title>{store.movieDetails.Title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col lg={5}>
              <Image src={store.movieDetails.Poster} />
            </Col>
            <Col lg={7}>
              <p>{store.movieDetails.Plot}</p>
              <p>Generos: {store.movieDetails.Genre}</p>
              <p>Duración: {store.movieDetails.Runtime}</p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default MyCardDetails;
