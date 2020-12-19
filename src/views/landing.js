import React from "react";
import { Link } from "react-router-dom";

export const Landing = () => {

    return (
        <>
        <div className="landing">       
            <Link className="btn btn-primary buttonlanding FontSpecialElite" type="button" to="/signup">Entra ya!</Link>
            <img src="https://clipartart.com/images/black-and-white-reel-cliparts-8.png" className="MovieTapeImage"></img>
            {/* <img src="https://www.jing.fm/clipimg/full/43-431173_bp-film-clipart-film-clipart-transparent-background.png" className="MovieTapeImage"></img> */}
            <img className="logoLanding" src="https://raw.githubusercontent.com/notanumber93/ProyectoFinal-front/develop/logovectorizadoblanco.png" />
            <h1 className="textolanding">¡ Bienvenido a MovieRank !</h1>
            <h2 className="txtlanding">Encuentra nuevas películas, rankearlas<br/> y guarda tus favoritas ;-)</h2>
        </div>
        </>
    );
}
