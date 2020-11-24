import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import { Home } from "./views/home";
import { Signup } from "./views/Signup";

// import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbarhome } from "./component/Navbarhome";
import { Footer } from "./component/footer";

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
						<Route exact path="/home">
							<Home />
						</Route>
            <Route exact path="/signup">
							<Signup />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				{/* </ScrollToTop> */}
			</BrowserRouter>
		</div>
	);
};

export default injectContext(App);