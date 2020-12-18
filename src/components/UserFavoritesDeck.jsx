import React, {useEffect, useState} from "react";
import {CardDeck} from "react-bootstrap";
import MyCard from "./MyCard";
import { Context } from "../store/appContext";
import { useContext } from "react";
import useUserSession from "./userSession"; 


const UserFavoritesDeck = () => {
    const { store, actions} = useContext(Context);
    const [user, setUser] = useUserSession("user");


    useEffect(() => {
          actions.showUserFavorites(user.id);
  }, []);

    return (
        <>
        <CardDeck className="justify-content-center">
      {!!store.user_favorites && store.user_favorites.length>0 && store.user_favorites.map((item, index) => {
        return (
          <MyCard
            key={index}
            title={item.title}
            poster={item.poster}
            year={item.year}
            // rate_avg={item.rate_avg}
          />
        );
      })}
        </CardDeck>
        </>
    );
}
export default UserFavoritesDeck; 