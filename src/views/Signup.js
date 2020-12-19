import React, {useContext} from "react";
import MyTab from "../components/MyTab";
import Navbarhome from "../components/Navbarhome";
import {Context} from "../store/appContext";


export const Signup = () => {
    const {store, actions} = useContext(Context);
    return (
        <>
            <Navbarhome />
            <MyTab />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Clap_cinema.svg/564px-Clap_cinema.svg.png" className="ImgMovieAction" />
        </>
    );
}

export default Signup;