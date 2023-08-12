import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      {/* <NavLink to="/">Home</NavLink> */}
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/resume">CV</NavLink>
      <NavLink to="/curatorial">Curatorial</NavLink>
    </div>
  );
}