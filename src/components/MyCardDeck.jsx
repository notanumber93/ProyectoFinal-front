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
       <div className="container-fluid" >
        <h3 className="p-2">{props.searchValue.toUpperCase()}</h3>
        <div className="row flex-row flex-nowrap overflow-auto" >
          {!!store.movieList && store.movieList.length > 0 && store.movieList.map((item, index) => {
            return (
              <MyCard
                key={index}
                title={item.Title}
                poster={item.Poster}
                year={item.Year}
              />
            );
          })}
        </div>
      </div>
    </CardDeck>
    )
}

export default MyCardDeck;
