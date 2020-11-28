import React from "react";
import Navbarhome from "../components/Navbarhome";
import MyCarousel from "../components/MyCarousel";
import MyCardDeck from "../components/MyCardDeck";
import { useState } from "react";


export const Home = () => {
    const [ searchValue, setSearchValue ] = useState('star wars');

    return(
        <>
        <Navbarhome searchValue={searchValue} setSearchValue={setSearchValue} />
        <MyCarousel/>
        <MyCardDeck searchValue={searchValue} />
        </>
    );
}
