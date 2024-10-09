import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div class="nav-wrapper">
          <ul>
            <li>
              <Link to="/">Úvod</Link>
            </li>
            <li>
              <Link to="/form">Kolik je vám let?</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
