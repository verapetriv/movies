import React from "react";
import { Link, withRouter } from "react-router-dom";

import routes from "../../routes";

import style from "./ListOfFilms.module.css";

const ListOfFilms = ({ films, location }) => (
  <ul>
    {films.map(({ title, id }) => (
      <li key={id}>
        <Link
          to={{
            pathname: `${routes.movies}/${id}`,
            state: { from: location },
          }}
          className={style.list}
        >
          {title}
        </Link>
      </li>
    ))}
  </ul>
);

export default withRouter(ListOfFilms);
