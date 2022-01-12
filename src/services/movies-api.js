import axios from 'axios';

const apiKey = '734ccbef6e575071d4ab0bbc43e70f11';

const fetchPopularMovies = () => (
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
        .then(response => response.data.results)
);

const fetchMoviesByQuery = query => (
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1`)
        .then(response => response.data.results)
);

const fetchMoviesDitails = ({ movieId }) => (
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
        // .then(response => response.data)
);

const fetchMovisCredits = movieId => (
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`)
        .then(response => response.data)
);

const fetchMoviesReviews = movieId => (
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}&page=1`)
        .then(response => response.data)
);

export default { fetchPopularMovies, fetchMoviesByQuery, fetchMoviesDitails, fetchMovisCredits, fetchMoviesReviews };