import React, { Component } from "react";

import SearchForm from "../Component/SearchForm";
import moviesApi from "../services/movies-api";
import ListOfFilms from "../Component/ListOfFilms";
import Error from "../Component/Error";

class MoviesPage extends Component {
  state = {
    searchQuery: "",
    movies: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;
    if (prevState.searchQuery !== searchQuery) {
      this.fetchMovies();
    }
  }

  fetchMovies = async () => {
    const { searchQuery } = this.state;
    const movies = await moviesApi.fetchMoviesByQuery(searchQuery);

    this.setState({ movies });
  };

  handleChangeQuery = (query) => {
    this.setState({ searchQuery: query });
  };

  render() {
    const { movies } = this.state;

    return (
      <>
        <SearchForm onSubmit={this.handleChangeQuery} />
        {movies &&
          (movies.length > 0 ? (
            <ListOfFilms films={movies} />
          ) : (
            <Error text={"No results were found for your search, try again"} />
          ))}
      </>
    );
  }
}

export default MoviesPage;
