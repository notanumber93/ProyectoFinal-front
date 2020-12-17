import { useParams } from "react-router-dom";
import MyCardDeck from "../components/MyCardDeck";
import Navbarhome from "../components/Navbarhome"


export const Search = () => {
    let { search } = useParams();

    return (
        <>
        <Navbarhome />
        <MyCardDeck searchValue={search} />
        </>
    );
};
