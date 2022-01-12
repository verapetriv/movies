import React, { Component } from "react";

import styles from "../styles/HomePage.module.css";

import moviesApi from "../services/movies-api";
import ListOfFilms from "../Component/ListOfFilms";

class HomePage extends Component {
  state = {
    popularFilms: [],
  };

  componentDidMount() {
    moviesApi
      .fetchPopularMovies()
      .then((results) => this.setState({ popularFilms: results }));
  }

  render() {
    const { popularFilms } = this.state;
    return (
      <>
        <h1 className={styles.title}>Tranding today</h1>
        <ListOfFilms films={popularFilms} />
      </>
    );
  }
}

export default HomePage;
