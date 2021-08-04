import fetch from "node-fetch";

export const getMovies = (limit, rating) => {
    return fetch('https://yts-proxy.now.sh/list_movies.json')
    .then(res => res.json())
    .then(json => json.data.movies);
};