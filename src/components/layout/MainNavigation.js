import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header>
      <div>Bucket Lists</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Bucket Lists</Link>
          </li>
          <li>
            <Link to="/new-bucket-list">New Bucket List</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
