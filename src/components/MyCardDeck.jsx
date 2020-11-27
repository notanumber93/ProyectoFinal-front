import { CardDeck } from "react-bootstrap";
import MyCard from "./MyCard";
import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

const MyCardDeck = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getMovieList();
  }, []);

  return (
    <CardDeck className="justify-content-center">
      {store.movieList.map((item, index) => {
        return (
          <MyCard
            key={index}
            title={item.Title}
            poster={item.Poster}
            year={item.Year}
          />
        );
      })}
    </CardDeck>
  );
};

export default MyCardDeck;
