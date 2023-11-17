import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={classes.mainContainer}>
      <h1 className={classes.title}>Programming Project Portfolio</h1>
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Projects
              </NavLink>
            </li>
          </ul>
        </nav>
        <p className={classes.github}>
          <a href="https://github.com/sionehavili2" target="_blank">
            <img
              className={classes.logo}
              src="./GitHub_Logo_White.png"
              alt="Description of the image"
            />
            <img
              className={classes.icon}
              src="./github-mark-white.png"
              alt="Description of the image"
            />
          </a>
        </p>
      </header>
    </div>
  );
}

export default NavBar;
