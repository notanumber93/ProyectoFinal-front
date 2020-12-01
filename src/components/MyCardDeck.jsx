import { CardDeck } from "react-bootstrap";
import MyCard from "./MyCard";
import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const MyCardDeck = (props) => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getMovieList(props.searchValue);
  }, [props.searchValue]);

  return (
    <CardDeck className="justify-content-center">
      {!!store.movieList && store.movieList.length>0 && store.movieList.map((item, index) => {
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
    )
}

export default MyCardDeck;
