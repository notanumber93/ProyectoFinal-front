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
				getMovieList: async (searchValue) => {
					const response = await fetch(
						`http://www.omdbapi.com?s=${searchValue}&type=movie&apikey=70240a7d`
					);
					const json = await response.json();
					console.log("--json--", json);
					setStore({movieList: json.Search});
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
				}
			}
		}
	};


export default getState;








