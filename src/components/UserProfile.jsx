import { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Context } from "../store/appContext";
import UserAdmin from "./UserAdmin";

const UserProfile = (props) => {
    const { store, actions } = useContext(Context);
    const [bio, setBio] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(bio);
        actions.updateBio(bio);
    };

    let adminOptions;
    if (store.logged_user.isAdmin) {
        adminOptions = (
            <UserAdmin/>
        );
    }else{
        adminOptions = null;
    }

    return (
        <Container>
            <h1>Perfil</h1>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group as={Row}>
                    <Form.Label column sm="5" style={{ textAlign: "center" }}>
                        Nombre
                    </Form.Label>
                    <Col>
                        <Form.Control
                            plaintext
                            readOnly
                            defaultValue={props.firstName}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="5" style={{ textAlign: "center" }}>
                        Apellido
                    </Form.Label>
                    <Col>
                        <Form.Control
                            plaintext
                            readOnly
                            defaultValue={props.lastName}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="5" style={{ textAlign: "center" }}>
                        Email
                    </Form.Label>
                    <Col>
                        <Form.Control
                            plaintext
                            readOnly
                            defaultValue={props.email}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="5" style={{ textAlign: "center" }}>
                        User
                    </Form.Label>
                    <Col>
                        <Form.Control
                            plaintext
                            readOnly
                            defaultValue={props.userName}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="5" style={{ textAlign: "center" }}>
                        Bio
                    </Form.Label>
                    <Col>
                        <Form.Control
                            as="textarea"
                            defaultValue={props.bio}
                            onChange={(e) => setBio(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Button type="submit" style={{ float: "right" }}>
                    Actualizar bio
                </Button>
            </Form>
            <br />
            {adminOptions}
        </Container>
    );
};
export default UserProfile;
