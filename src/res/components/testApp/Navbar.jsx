import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { HomePage } from "./pages/HomePage"

const navbarListsTemp = [
  "home",
  "about",
  "protect",
  "invest",
  "learn more",
];
const route = {
  home: <HomePage />,
}
const NavbarListLink = ({path, title}) => {
  return(
    <li className="navigation-list">
     <Link to={path} className="link">{title}</Link>
    </li>
  );
};

export const Navbar = () => {
  const navbarLists = navbarListsTemp.map(navbarList => {
    if(route[navbarList]) return <NavbarListLink key={navbarList} path="/" title={navbarList} />
    return <li key={navbarList} className="navigation-list">{navbarList}</li>;
  });
  return (
    <nav className="container navigation-bar">
        <Link to="/" className="navigation-title">
          <span className="many">many</span>
          <span className="bank">bank</span>
        </Link>
        <ul className="navigation-lists">
          {navbarLists}
        </ul>
    </nav>
  );
};

