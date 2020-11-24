import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import Listacharacters from "../component/listcharacters";
import Listaplanets from "../component/listplanets";
import Listavehicles from "../component/listvehicles";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<h1>Characters</h1>
			<Listacharacters />
			<h1>Planets</h1>
			<Listaplanets />
			<h1>Vehicles</h1>
			<Listavehicles />
		</div>
	);
};
