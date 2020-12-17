import "./style.min.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title-box">
        <h1 className="navbar-title">
          <Link to="/">My-React-App</Link>
        </h1>
      </div>
      <div className="navbar-links-box">
        <ul className="navbar-links">
          <li className="navbar-link">
            <Link to="/pathone">Link1</Link>
          </li>
          <li className="navbar-link">
            <Link to="/pathtwo">Link2</Link>
          </li>
          <li className="navbar-link">
            <Link to="/paththree">Link3</Link>
          </li>
          <li className="navbar-link">
            <Link to="/pathfour">Link4</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
