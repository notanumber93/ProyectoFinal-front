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
				getMovieList: async () => {
					const config = {
						headers: {
							"Content-Type": "application/json"
						}
					};
					const response = await fetch(
						"https://cors-anywhere.herokuapp.com/http://www.omdbapi.com?s=star wars&apikey=e038e961",
						config
					);
					const json = await response.json();
					setStore({movieList: json.Search});
				}
			}
		}
	};


export default getState;








