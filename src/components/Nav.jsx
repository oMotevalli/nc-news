import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/" className="nav-item">
        Home
      </Link>
      <Link to="/articles" className="nav-item">
        Articles
      </Link>

      <Link to="/topics/cooking" className="nav-item">
        Cooking
      </Link>
    </nav>
  );
};

export default Nav;
