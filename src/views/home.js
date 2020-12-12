import React, { useState, useEffect } from "react";
import Navbarhome from "../components/Navbarhome";
import MyCarousel from "../components/MyCarousel";
import MyCardDeck from "../components/MyCardDeck";


export const Home = (props) => {
    const [ searchValue, setSearchValue ] = useState('');

    const handledChange = e => {
        setSearchValue(e.target.value);
        console.log(e.target.value);
    }

    return(
        <>
        <Navbarhome searchValue={searchValue} handledChange={handledChange}/>
                <MyCarousel/>
        <MyCardDeck searchValue="star wars"/>
        </>
    );
}
