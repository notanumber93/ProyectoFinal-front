import CardDeck from "react-bootstrap";
import MyCard from "./MyCard";
import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

const MyCardDeck = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    //function to fetch list of movies
    actions.getMovieList();
  }, [actions]);

  return (
    <CardDeck>
      {store.movieList.map((item, index) => {
        return (
          <MyCard title={item.title} poster={item.poster} year={item.year} />
        );
      })}
    </CardDeck>
  );
};

export default MyCardDeck;
