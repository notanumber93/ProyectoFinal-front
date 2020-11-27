import React, {useContext} from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user_data: { },
			movieList: [],
			movieDetails: { }
			},

			actions: {
				onChangeUser: (evento) => {
					console.log(evento)

				},
				getMovieList: async () => {
<<<<<<< HEAD
				
					const config = {
						headers: {
							"Content-Type": "application/json"
						}
					};
=======
>>>>>>> 4ac8ce5... Terminado modal card details
					const response = await fetch(
						"http://www.omdbapi.com?s=star%20wars&type=movie&apikey=70240a7d"
					);
					const json = await response.json();
					console.log("--json--", json);
					setStore({movieList: json.Search});
<<<<<<< HEAD
	
=======
				},
				getMovieDetails: async (title) => {
					getActions().cleanMovieDetails();
					const response = await fetch(
						`https://cors-anywhere.herokuapp.com/http://www.omdbapi.com?t=${title}&apikey=70240a7d`
					);
					const json = await response.json();
					console.log("--json--", json);
					setStore({movieDetails: json});
				},
				cleanMovieDetails: () => {
					setStore({movieDetails: { }});
>>>>>>> 4ac8ce5... Terminado modal card details
				}
			}
		}
	};


export default getState;








