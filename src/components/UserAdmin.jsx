import { useContext, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Context } from "../store/appContext";

const UserAdmin = () => {
    const { store, actions } = useContext(Context);
    const [ name, setName ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.deleteUser(name);
    };

    return (
        <>
            <h2>Acciones de Administrador</h2>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group as={Row}>
                    <Form.Label column sm="5" style={{ textAlign: "center" }}>
                        Eliminar usuario:
                    </Form.Label>
                    <Col>
                        <Form.Control name="userName" placeholder="Username" onChange={(e) => setName(e.target.value)} />
                    </Col>
                </Form.Group>
                <Button type="submit" style={{ float: "right" }}>
                    Eliminar usuario
                </Button>
            </Form>
        </>
    );
};
export default UserAdmin;
