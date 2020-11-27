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
        </>
    );
}

export default Signup;