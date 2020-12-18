import React, { useState, useEffect } from "react";
import Navbarhome from "../components/Navbarhome";
import MyCarousel from "../components/MyCarousel";


export const Home = () => {
    return (
        <>
            <Navbarhome />
            <MyCarousel />
        </>
    );
}
