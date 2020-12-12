import { useContext } from "react";
import { Context } from "../store/appContext";
import useUserSession from "./userSession";

const Login = () => {
    const { store, actions } = useContext(Context);
    const [user, setUser] = useUserSession('user');

    const handleSubmit = (evento) => {
        evento.preventDefault();
        actions.onLogin();
        setUser(JSON.stringify(store.logged_user));
        console.log(user);
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h1>Ingresa</h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
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
            </div>
        </>
    );
};

export default Login;
