import React from "react";
import { NavLink } from "react-router-dom";

import routes from "../../routes";
import style from "./AppBar.module.css";

const AppBar = () => (
  <ul className={style.AppBar}>
    <li>
      <NavLink
        exact
        to={routes.home}
        className={style.AppBar__item}
        activeClassName={style.AppBar__item_active}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to={routes.movies}
        className={style.AppBar__item}
        activeClassName={style.AppBar__item_active}
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default AppBar;
