import React, { Component } from "react";

import moviesApi from "../../services/movies-api";
import Error from "../Error";

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const { results } = await moviesApi.fetchMoviesReviews(movieId);
    console.log(results);

    this.setState({ reviews: results });
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        {reviews.lenght > 0 ? (
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h4>Autor: {author}</h4>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <Error text={"We don't have any reviews for this movies"} />
        )}
      </>
    );
  }
}

export default Reviews;
