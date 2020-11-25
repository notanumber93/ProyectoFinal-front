import React, {useContext} from "react";
import Navbarhome from "../components/Navbarhome";
import {Context} from "../store/appContext";


export const Signup = () => {
    const {store, actions} = useContext(Context);
    return (
        <>
            <Navbarhome />
            <div classNameName="container">
                <div classNameName="row">
                    <div classNameName="col-6">
                        <h1>Registro de usuarios</h1>
                    </div>
                </div>
            </div>
            <div classNameName="row">
                <div classNameName="col-6">
                    <form>
                        <div className="row mt-4">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="First name" />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Last name" />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col">
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="email" />
                            </div>
                        </div>
                        <div className="row text-center mt-4">
                            <div classNameName="col">
                            <button type="submit" className="btn btn-dark">Registrar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup;