import React, { useState, useEffect } from "react";
import Navbarhome from "../components/Navbarhome";
import MyCarousel from "../components/MyCarousel";
import MyCardDeck from "../components/MyCardDeck";
import MyCard from "../components/MyCard";


export const Home = (props) => {
   
    return (
        <>
            <Navbarhome />

            <MyCarousel />

            <MyCardDeck title="Romance" searchValue="love"/>
        


        </>
    );
}
