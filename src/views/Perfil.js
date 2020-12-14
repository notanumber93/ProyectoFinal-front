import { useContext, useEffect } from "react";
import Navbarhome from "../components/Navbarhome";
import MyCardeck, { MyCardDeck } from "../components/MyCardDeck";
import UserProfile from "../components/UserProfile";
import { Context } from "../store/appContext";
import { Container, Tab, Tabs } from "react-bootstrap";
import UserFavoritesDeck from "../components/UserFavoritesDeck";
import useUserSession from "../components/userSession";

export const Perfil = () => {
    const { store, actions } = useContext(Context);
    const [ user, setUser ] = useUserSession('user');
    const logged_user = JSON.parse(user);

    useEffect(() =>{
        actions.showUserFavorites(logged_user.id);
    }, []);

    return (
        <>
            <Navbarhome />
            <Container>
                <Tabs defaultActiveKey="profile">
                    <Tab eventKey="profile" title="Datos usuario">
                        <UserProfile
                            firstName={logged_user != null ? logged_user.firstName : ''}
                            lastName={logged_user != null ? logged_user.lastName : ''}
                            email={logged_user != null ? logged_user.email : ''}
                            userName={logged_user != null ? logged_user.userName : ''}
                            bio={logged_user != null ? logged_user.bio : ''}
                        />
                    </Tab>
                    <Tab eventKey="favoritos" title="Favoritos">
                        <UserFavoritesDeck />
                    </Tab>
                </Tabs>
            </Container>
        </>
    );
};
