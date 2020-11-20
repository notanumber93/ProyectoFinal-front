import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Detailcharacter, Singlecharacter } from "./views/detailcharacters";
import injectContext from "./store/appContext";
import Navbar from "./component/Navbar";
import { Detailvehicle } from "./views/detailvehicles";
import { Detailplanet } from "./views/detailplanets";

// import Navbar from "./component/Navbar";
// import Footer from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				{/* <ScrollToTop> */}
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/demo">
						<Demo />
					</Route>
					<Route exact path="/detailcharacter/:theid" component={Detailcharacter} />
					<Route exact path="/detailplanet/:theid" component={Detailplanet} />
					<Route exact path="/detailvehicle/:theid" component={Detailvehicle} />
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
				{/* </ScrollToTop> */}
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
