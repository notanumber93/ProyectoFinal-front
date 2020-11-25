import React, {useContext} from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user_data: { },
			movieList: []

			},

			actions: {
				onChangeUser: (evento) => {
					console.log(evento)

				},
				getMovieList: async (search) => {
					const config = {
						method: "GET",
						headers: {
							"Content-type": "application/json"
						}
					};
					const response = await fetch(
						"http://www.omdbapi.com?s=star wars&type=movie&apikey=e038e961",
						config
					);
					const json = await response.json();
					setStore({movieList: json});
				}
			}
		}
	};


export default getState;








