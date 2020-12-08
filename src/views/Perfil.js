import { useContext } from "react";
import Navbarhome from "../components/Navbarhome";
import UserProfile from "../components/UserProfile";
import { Context } from "../store/appContext";

export const Perfil = () => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <Navbarhome />
            <UserProfile
                firstName={store.user_data.firstName}
                lastName={store.user_data.lastName}
                email={store.user_data.email}
                userName={store.user_data.userName}
                bio={store.user_data.bio}
            />
        </>
    );
};
