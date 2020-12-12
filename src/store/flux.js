
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            user_data: {
                userName: "",
                email: "",
                userPass: "",
                firstName: "",
                lastName: "",
                isAdmin: false,
                bio: "",
            },
            login_data: {
                userLogin: "",
                userPass: "",
            },
            auth_token: "",
            movieList: [],
            movieDetails: {},
            topMovies: [],
        },

        actions: {
            updateBio: (bio) => {
                const store = getStore();
                let { user_data } = store;
                user_data.bio = bio;
                setStore({ user_data });
                console.log(store.user_data);
                console.log(store.user_data.id);
                getActions().updateUser();
			},
			updateUser: async () => {
				const store = getStore();
				let options = {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${store.auth_token}`,
					},
					body: JSON.stringify(store.user_data),
				};
				const response = await fetch(
                    `http://127.0.0.1:5000/users/${store.user_data.id}`,
                    options
                );
                const json = await response.json();
                console.log(json);
			},
            onChangeUser: (evento) => {
                const store = getStore();
                const { user_data } = store;
                user_data[evento.target.name] = evento.target.value;
                setStore({ user_data });
                console.log(store.user_data);
            },
            onSignup: async () => {
                const store = getStore();
                let options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(store.user_data),
                };
                const response = await fetch(
                    "http://127.0.0.1:5000/signup",
                    options
                );
                const json = await response.json();
                console.log("--data--", json);
            },
            onChangeLogin: (evento) => {
                const store = getStore();
                const { login_data } = store;
                login_data[evento.target.name] = evento.target.value;
                setStore({ login_data });
                console.log(store.login_data);
            },
            onLogin: async () => {
                const store = getStore();
                let options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(store.login_data),
                };
                const response = await fetch(
                    "http://127.0.0.1:5000/login",
                    options
                );
                const json = await response.json();
                console.log("--data--", json);
                let { user_data } = store;
                user_data = { ...json.user };
				setStore({ user_data });
				setStore({ auth_token: json.access_token });
				console.log(user_data);
				console.log(store.auth_token);
            },
            getMovieList: async (searchValue) => {
                console.log(searchValue);
                const response = await fetch(
                    `http://www.omdbapi.com?s=${searchValue}&type=movie&apikey=70240a7d`
                );
                const json = await response.json();
                console.log("--json--", json);
                setStore({ movieList: json.Search });
            },
            getMovieDetails: async (title) => {
                getActions().cleanMovieDetails();
                const response = await fetch(
                    `http://www.omdbapi.com?t=${title}&apikey=70240a7d`
                );
                const json = await response.json();
                console.log("--json--", json);
                setStore({ movieDetails: json });
            },
            cleanMovieDetails: () => {
                setStore({ movieDetails: {} });
            },
            getTopMovies: async (imdbId) => {
                getActions().cleanMovieDetails();
                const response = await fetch(
                    `http://www.omdbapi.com/?i=${imdbId}7&apikey=70240a7d`
                );
                const json = await response.json();
                console.log("--topMoviesnp--", json);
                setStore({ topMovies: json });
                },
        },
    };
};

export default getState;
