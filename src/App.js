import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Landing } from "./views/landing";
import { Home } from "./views/home";
import { Signup } from "./views/Signup";
import { Perfil } from "./views/Perfil";

// import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Footer } from "./components/footer";

import "./App.css";

//create your first component
const App = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div className="d-flex flex-column">
            <BrowserRouter basename={basename}>
                {/* <ScrollToTop> */}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/signup">
                        <Signup />
                    </Route>
                    <Route exact path="/perfil">
                        <Perfil />
                    </Route>
                    <Route
                        render={() => <h1 className="notfound">Not found!</h1>}
                    />
                </Switch>
                <Footer />
                {/* </ScrollToTop> */}
            </BrowserRouter>
        </div>
    );
};

export default injectContext(App);
