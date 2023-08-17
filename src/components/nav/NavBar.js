import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <div>
        <NavLink to="/">
          <h1>Atticus Cutri</h1>
        </NavLink>
      </div>
      <div className="link-wrapper">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/resume">CV</NavLink>
        <NavLink to="/curatorial">Curatorial</NavLink>
      </div>
    </div>
  );
}
