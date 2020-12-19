import { CardDeck } from "react-bootstrap";
import MyCard from "./MyCard";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import useUserSession from "./userSession";

export const MyCardDeck = (props) => {
    const [user, setUser] = useUserSession("user");
    const [page, setPage] = useState(1);
    const { store, actions } = useContext(Context);
    const logged_user = JSON.parse(user);

    useEffect(() => {
        actions.getMovieList(props.searchValue, logged_user.auth_token, page);
    }, [props.searchValue]);

    return (
      <CardDeck className="justify-content-center">
            <div className="row ">
                <h1 className="display-4 text-light">{props.title}</h1>
            </div>
            <div className="container-fluid" >
                <div className="row flex-row flex-nowrap overflow-auto" >
                    {!!store.movieList &&
                        store.movieList.length > 0 &&
                        store.movieList.map((item, index) => {
                            return (
                                <MyCard
                                    key={index}
                                    title={item.Title}
                                    poster={item.Poster}
                                    year={item.Year}
                                    movie_id={item.imdbID}
                                    rate={item.rate}
                                    show={true}
                                    showFavorite={true}
                                />
                            );
                        })}
                </div>
            </div>
        </CardDeck>
    );
};

export default MyCardDeck;
