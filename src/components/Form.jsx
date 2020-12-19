import { useContext } from "react";
import { Context } from "../store/appContext";

const Form = () => {
    const { store, actions } = useContext(Context);

    const handleSubmit = (evento) => {
        evento.preventDefault();
        actions.onSignup();
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 PaddingTitles">
                        <h1 className="FontSpecialElite">Registro de usuarios</h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 PaddingForms">
                    <form onSubmit={(evento) => handleSubmit(evento)}>
                        <div className="row mt-4">
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                    name="firstName"
                                    onChange={(evento) =>
                                        actions.onChangeUser(evento)
                                    }
                                />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Apellido"
                                    name="lastName"
                                    onChange={(evento) =>
                                        actions.onChangeUser(evento)
                                    }
                                />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    onChange={(evento) =>
                                        actions.onChangeUser(evento)
                                    }
                                />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre de Usuario"
                                    name="userName"
                                    onChange={(evento) =>
                                        actions.onChangeUser(evento)
                                    }
                                />
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    name="userPass"
                                    onChange={(evento) =>
                                        actions.onChangeUser(evento)
                                    }
                                />
                            </div>
                        </div>

                        <div className="row text-center mt-4">
                            <div className="mx-auto">
                                <button type="submit" className="btn btn-dark">
                                    Registrar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Form;
