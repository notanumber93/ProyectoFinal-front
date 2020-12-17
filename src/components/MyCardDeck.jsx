import { CardDeck } from "react-bootstrap";
import MyCard from "./MyCard";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import useUserSession from "./userSession";

export const MyCardDeck = (props) => {
    const [user, setUser] = useUserSession("user");
    const [page, setPage] = useState(1);
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getMovieList(props.searchValue, user.auth_token, page);
    }, [props.searchValue]);

    return (
        <CardDeck className="justify-content-center">
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
                            rate_avg={item.rate_avg}
                        />
                    );
                })}
        </CardDeck>
    );
};

export default MyCardDeck;
