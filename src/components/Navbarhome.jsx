import React, { useState, useEffect, useContext, Component } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";
import useUserSession from "./userSession";
import { Button } from "react-bootstrap";

function Navbarhome(props) {
    const { store, actions } = useContext(Context);
    const [search, setSearch] = useState("");
    const [user, setUser] = useUserSession("user");
    const logged_user = JSON.parse(user);
    const history = useHistory();
    let logout;
    let login;
    let perfil;
    let inicio;
    let searchBox;

    const handleLogout = async () => {
        await setUser(null);
        history.push("/");
    };

    if (logged_user != null && JSON.stringify(logged_user) !== "{}") {
        console.log(logged_user);
        inicio = (
            <Link className="nav-link" to="/home">
                Inicio
            </Link>
        );
        perfil = (
            <Link className="nav-link" to="/Perfil">
                Perfil
            </Link>
        );
        searchBox = (
            <form
                className="form-inline my-2 my-lg-0"
                onSubmit={() => history.push("/search/" + search)}
            >
                <input
                    className="form-control mr-sm-2"
                    defaultValue={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search"
                    aria-label="Search"
                />
                <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                >
                    Buscar
                </button>
            </form>
        );
        logout = (
            <Button
                className="my-2 mx-2"
                type="submit"
                onClick={() => handleLogout()}
            >
                Logout
            </Button>
        );
        login = null;
    } else {
        login = (
            <Link className="nav-link" to="/signup">
                Login
            </Link>
        );
        inicio = null;
        perfil = null;
        logout = null;
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/"></Link>
            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">{inicio}</li>
                    <li className="nav-item">{login}</li>
                    <li className="nav-item">{perfil}</li>
                </ul>
                {searchBox}
                {logout}
            </div>
        </nav>
    );
}

export default Navbarhome;
