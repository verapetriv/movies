import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";

import style from "../styles/MovieDetailsPage.module.css";

import moviesApi from "../services/movies-api";
import routes from "../routes";
import Cast from "../Component/Cast";
import Reviews from "../Component/Reviews";

class MovieDetailsPage extends Component {
  state = {
    movie: null,
    img: "",
  };

  async componentDidMount() {
    const movieId = this.props.match.params;
    const { data } = await moviesApi.fetchMoviesDitails(movieId);

    this.setState({ movie: data });
  }

  onGoBack = () => {
    const { history, location } = this.props;

    if (location?.state?.from) {
      history.push(location.state.from);
      return;
    }

    history.push(routes.home);
  };

  render() {
    const { movie } = this.state;
    return (
      <>
        <button type="button" onClick={this.onGoBack} className={style.goBack}>
          {" "}
          Go back
        </button>
        {movie && (
          <div className={style.MovieDetailsPage}>
            <img
              src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
              alt={movie.title}
              className={style.MovieDetailsPage__img}
            />
            <div className={style.MovieDetailsPage__descr}>
              <h1 className={style.MovieDetailsPage__title}>{movie.title}</h1>
              <p>User score: {movie.vote_average * 10}%</p>
              <h4>Overview:</h4>
              <p className={style.MovieDetailsPage__text}>{movie.overview}</p>
              <h4>Genres:</h4>
              {movie.genres.map(({ id, name }) => (
                <p key={id}>{name}</p>
              ))}
            </div>
          </div>
        )}
        <div>
          <h3>Additional information</h3>
          <ul>
            <li>
              <NavLink
                to={`${this.props.match.url}/cast`}
                className={style.list}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${this.props.match.url}/reviews`}
                className={style.list}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
        <Route
          path={`${this.props.match.path}/cast`}
          render={(props) => {
            return <Cast {...props} />;
          }}
        />
        <Route
          path={`${this.props.match.path}/reviews`}
          render={(props) => {
            return <Reviews {...props} />;
          }}
        />
      </>
    );
  }
}

export default MovieDetailsPage;
