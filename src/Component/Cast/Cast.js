import React, { Component } from "react";

import moviesApi from "../../services/movies-api";
import style from "./Cast.module.css";

class Cast extends Component {
  state = {
    authors: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const { cast } = await moviesApi.fetchMovisCredits(movieId);

    this.setState({
      authors: cast,
    });
  }

  render() {
    const { authors } = this.state;
    const imageLink = "https://image.tmdb.org/t/p/w220_and_h330_face";
    const defaultImg = require("../../image/default-image.jpg");

    return (
      <ul className={style.Cast}>
        {authors.map(({ profile_path, id, character, name }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `${imageLink}${profile_path}`
                  : defaultImg.default
              }
              width={130}
              alt={name}
            />
            <h4>{name}</h4>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    );
  }
}
export default Cast;
