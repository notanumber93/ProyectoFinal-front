import React, { useContext, useEffect, useState } from "react";
import Navbarhome from "../components/Navbarhome";
import MyCardeck, { MyCardDeck } from "../components/MyCardDeck";
import UserProfile from "../components/UserProfile";
import { Context } from "../store/appContext";
import { Container, Tab, Tabs } from "react-bootstrap";
import UserFavoritesDeck from "../components/UserFavoritesDeck";
import useUserSession from "../components/userSession";
import UserRatesDeck from "../components/UserRatesDeck";

export const Perfil = () => {
    const { store, actions } = useContext(Context);
    const [user, setUser] = useUserSession("user");
    const logged_user = JSON.parse(user);
    const [searchValue, setSearchValue] = useState('star wars');

    const handledChange = e => {
        setSearchValue(e.target.value);
        console.log(e.target.value);
    }


    return (
        <>
            <Navbarhome searchValue={searchValue} handledChange={handledChange} />
            <Container>
                <Tabs defaultActiveKey="profile">
                    <Tab eventKey="profile" title="Datos usuario">
                        <UserProfile
                            firstName={
                                logged_user != null ? logged_user.firstName : ""
                            }
                            lastName={
                                logged_user != null ? logged_user.lastName : ""
                            }
                            email={logged_user != null ? logged_user.email : ""}
                            userName={
                                logged_user != null ? logged_user.userName : ""
                            }
                            bio={logged_user != null ? logged_user.bio : ""}
                        />
                    </Tab>
                    <Tab eventKey="favoritos" title="Favoritos">
                        <UserFavoritesDeck searchValue={searchValue}/>
                    </Tab>
                    <Tab eventKey="user_rate" title="Rating">
                        <UserRatesDeck searchValue={searchValue} />
                    </Tab>
                </Tabs>
            </Container>
        </>
    );
};
