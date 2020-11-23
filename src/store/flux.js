import React, {useContext} from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user_data: { }

			},

			actions: {
				onChangeUser: (evento) => {
					console.log(evento)

				}
			}
		}
	};


export default getState;








