
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
            logged_user: {
                userName: "",
                email: "",
                userPass: "",
                firstName: "",
                lastName: "",
                isAdmin: false,
                bio: "",
                auth_token: "",
            },
            success: false,
            movieList: [],
            movieDetails: {},
            user_favorites: [],
            error_msg: "",
            topMovies: [],
        },

        actions: {
            updateBio: (bio) => {
                const store = getStore();
                let { logged_user } = store;
                console.log(logged_user);
                logged_user.bio = bio;
                setStore({ logged_user });
                console.log(store.logged_user);
                console.log(store.logged_user.id);
                getActions().updateUser();
            },
            updateUser: async () => {
                const store = getStore();
                let options = {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${store.logged_user.auth_token}`,
                    },
                    body: JSON.stringify(store.logged_user),
                };
                const response = await fetch(
                    `http://127.0.0.1:5000/users/${store.logged_user.id}`,
                    options
                );
                const json = await response.json();
                console.log(json);
            },
            deleteUser: async (username) => {
                const store = getStore();
                let options = {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${store.logged_user.auth_token}`,
                    },
                };
                const response = await fetch(
                    `http://127.0.0.1:5000/users/${username}`,
                    options
                );
                const json = await response.json();
                console.log(json);
                setStore({ success: json.success });
                console.log(store.success);
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
                let { logged_user } = store;
                logged_user = { ...json.user };
                logged_user.auth_token = json.access_token;
                setStore({ logged_user });
                console.log(logged_user);
                if (json.msg != null) {
                    setStore({ error_msg: json.msg });
                }
            },
            getMovieList: async (searchValue, auth_token, page) => {
                console.log(searchValue);
                const response = await fetch(
                    `http://www.omdbapi.com?s=${searchValue}&type=movie&page=${page}&apikey=70240a7d`
                );
                const json = await response.json();
                console.log("--json--", json);
                let options = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "User-Agent": "PostmanRuntime/7.26.8",
                        Accept: "*/*",
                        "Accept-Encoding": "gzip, deflate, br",
                        Connection: "keep-alive",
                        Authorization: `Bearer ${auth_token}`,
                    },
                };
                const response2 = await fetch(
                    `http://127.0.0.1:5000/rates_avgs`,
                    options
                );
                const json2 = await response2.json();
                console.log("--json2--", json2);
                //setStore({ rates_avgs: json2.rates_avgs });

                if (json.Search != null) {
                    for (var i = 0; i < json.Search.length; i++) {
                        if (json2.rates_avgs != null) {
                            for (var j = 0; j < json2.rates_avgs.length; j++) {
                                if (
                                    json2.rates_avgs[j].movie_id ===
                                    json.Search[i].imdbID
                                ) {
                                    json.Search[i].rate_avg =
                                        json2.rates_avgs[j].rate_avg;
                                }
                            }
                        }
                    }
                }
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

            setRating2: async (user_id, auth_token, movie_id, rate, year, poster, title) => {
                let options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "User-Agent": "PostmanRuntime/7.26.8",
                        Accept: "*/*",
                        "Accept-Encoding": "gzip, deflate, br",
                        Connection: "keep-alive",
                        Authorization: `Bearer ${auth_token}`,
                    },
                    body: JSON.stringify({
                        user_id: user_id,
                        movie_id: movie_id,
                        rate: rate,
                        year:year,
                        poster:poster,
                        title:title
                    }),
                };

                const response = await fetch(
                    `http://127.0.0.1:5000/api/rate`,
                    options
                );
                const json = await response.json();
                console.log("--rate--", json);
            },
            getUserRates: async (user_id, auth_token) => {
                console.log('user_id', user_id, 'auth_token', auth_token);
                /*
                console.log(searchValue);
                const response = await fetch(
                    `http://www.omdbapi.com?s=${searchValue}&type=movie&apikey=70240a7d`
                );
                const json = await response.json();
                console.log("--json--", json);
                */
                let options = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "User-Agent": "PostmanRuntime/7.26.8",
                        Accept: "*/*",
                        "Accept-Encoding": "gzip, deflate, br",
                        Connection: "keep-alive",
                        Authorization: `Bearer ${auth_token}`,
                    },
                };
                const response2 = await fetch(
                    `http://127.0.0.1:5000/user_rates/${user_id}`,
                    options
                );
                const json2 = await response2.json();
                console.log("--json2--", json2);
                /*
                for (var i = 0; i < json.Search.length; i++) {
                    if (json2.user_rates != null) {
                        for (var j = 0; j < json2.user_rates.length; j++) {
                            if (
                                json2.user_rates[j].movie_id ===
                                json.Search[i].imdbID
                            ) {
                                json.Search[i].rate = json2.user_rates[j].rate;
                            }
                        }
                    }
                }
                //Borrar las películas que no tienen rating
                for (var k=json.Search.length-1; k>=0; k--) {
                    if (json.Search[k].rate === undefined) {
                        json.Search.splice(k);
                    }
                }
                */
                setStore({ movieList: json2.user_rates });
                //setStore({ movieList: json.Search });
            },
            addUserFavorites: async (
                user_id,
                auth_token,
                movie_id,
                year,
                poster,
                title
            ) => {
                let options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "User-Agent": "PostmanRuntime/7.26.8",
                        Accept: "*/*",
                        "Accept-Encoding": "gzip, deflate, br",
                        Connection: "keep-alive",
                        Authorization: `Bearer ${auth_token}`,
                    },
                    body: JSON.stringify({
                        user_id: user_id,
                        movie_id: movie_id,
                        year: year,
                        poster: poster,
                        title: title,
                    }),
                };

                const response = await fetch(
                    `http://127.0.0.1:5000/favorites`,
                    options
                );
                const json = await response.json();
                console.log("--favorites--", json);
            },

            showUserFavorites: async (id, auth_token) => {
                let options = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "User-Agent": "PostmanRuntime/7.26.8",
                        Accept: "*/*",
                        "Accept-Encoding": "gzip, deflate, br",
                        Connection: "keep-alive",
                        Authorization: `Bearer ${auth_token}`,
                    },
                };

                const response = await fetch(
                    `http://127.0.0.1:5000/favorites/${id}`,
                    options
                );

                const json = await response.json();
                console.log("--favorites_get--", json);
                setStore({ user_favorites: json.favorites });
                const store = getStore();
                console.log(store.user_favorites);
            },
            getTopMovies: async (movie_id) => {
                const response = await fetch(
                    `http://www.omdbapi.com/?i=${movie_id}&apikey=70240a7d`
                );
                const json = await response.json();
                console.log("--Moviebyid--", json);
                const store = getStore();
                let {topMovies} = store;
                topMovies.push(json)
                setStore({ topMovies: topMovies })

            },
        },
    };
};

export default getState;
