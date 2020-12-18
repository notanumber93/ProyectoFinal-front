import React from "react";
import { Link } from "react-router-dom";

export const Landing = () => {

    return (
        <>
        <div className="landing">       
            <Link className="btn btn-primary buttonlanding" type="button" to="/signup">Iniciar sesión</Link>
            <img className="logoLanding" src="https://raw.githubusercontent.com/notanumber93/ProyectoFinal-front/develop/logovectorizadoblanco.png" />
        </div>
        </>
    );
}
