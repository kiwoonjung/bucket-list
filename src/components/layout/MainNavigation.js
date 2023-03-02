import { useContext } from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favoriteCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Bucket Lists</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Bucket Lists</Link>
          </li>
          <li>
            <Link to="/new-bucket-list">New Bucket List</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>
                {favoriteCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
