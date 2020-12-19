import { useContext, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { Context } from "../store/appContext";
import useUserSession from "./userSession";

const Login = ({ history }) => {
    const { store, actions } = useContext(Context);
    const [user, setUser] = useUserSession("user");
    let pass_error;
    let user_error;

    const handleSubmit = async (evento) => {
        evento.preventDefault();
        await actions.onLogin();
        await setUser(JSON.stringify(store.logged_user));
        if (store.logged_user.id != null) {
            history.push("/home");
        } else {
            console.log(store.error_msg);
            if (store.error_msg === "Contraseña erronea") {
                pass_error = <Alert variant="danger">{store.error_msg}</Alert>;
                user_error = null;
            } else {
                user_error = <Alert variant="danger">{store.error_msg}</Alert>;
                pass_error = null;
            }
        }
    };

    return (
        <>
            <Container>
                <Row>
                    <Col md="12 PaddingTitles">
                        <h1 className="FontSpecialElite">Ingresa</h1>
                    </Col>
                </Row>
            </Container>
            <div className="row">
                <div className="col-12 PaddingForms">
                    <form onSubmit={(evento) => handleSubmit(evento)}>
                        <div className="row mt-4">
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Usuario"
                                    name="userLogin"
                                    onChange={(evento) =>
                                        actions.onChangeLogin(evento)
                                    }
                                />
                            </div>
                            {user_error}
                        </div>

                        <div className="row mt-4">
                            <div className="col">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    name="userPass"
                                    onChange={(evento) =>
                                        actions.onChangeLogin(evento)
                                    }
                                />
                            </div>
                            {pass_error}
                        </div>
                        <div className="row text-center mt-4">
                            <div className="mx-auto">
                                <button type="submit" className="btn btn-dark">
                                    Ingresar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-6">
                    <div className="row mt-4">{user_error}</div>
                    <div className="row mt-4">{pass_error}</div>
                </div>
            </div>
        </>
    );
};

export default withRouter(Login);
