import { NavLink } from "react-router-dom";

const link = ({ isActive }) =>
  `px-3 py-2 ${isActive ? "font-semibold underline" : ""}`;

export default function Navbar() {
  return (
    <nav className="flex gap-4 p-4 border-b">
      <NavLink to="/" className={link}>Home</NavLink>
      <NavLink to="/about" className={link}>About</NavLink>
      <NavLink to="/projects" className={link}>Projects</NavLink>
      <NavLink to="/contact" className={link}>Contact</NavLink>
      <NavLink to="/login" className={link}>Login</NavLink>
      <NavLink to="/uebungsaufgaben" className={link}>Übungsaufgaben</NavLink>
    </nav>
  );
}