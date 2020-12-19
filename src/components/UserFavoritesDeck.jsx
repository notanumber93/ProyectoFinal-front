import React, { useEffect } from "react";
import { CardDeck } from "react-bootstrap";
import MyCard from "./MyCard";
import { Context } from "../store/appContext";
import { useContext } from "react";

const UserFavoritesDeck = (props) => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.showUserFavorites(props.user.id, props.user.auth_token);
    }, []);

    return (
        <CardDeck className="justify-content-center">
            {!!store.user_favorites &&
                store.user_favorites.length > 0 &&
                store.user_favorites.map((item, index) => {
                    return (
                        <MyCard
                            key={index}
                            title={item.title}
                            poster={item.poster}
                            year={item.year}
                            favorite={true}
                            showFavorite={true}
                        />
                    );
                })}
        </CardDeck>
    );
};
export default UserFavoritesDeck;
