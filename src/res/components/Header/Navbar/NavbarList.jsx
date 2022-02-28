import { Random } from "res/global/utils";

export const NavbarList = () => {
  const navbarLists = [
    "Home",
    "Learn more",
    "FAQs",
    "Log in",
    "Get started",
  ];

  const navbarElementLists = navbarLists
    .map(navbarList => 
      <li key={Random.getKey(navbarList)}>{navbarList}</li>);

  return (
    <ul className="">
      {navbarElementLists}
    </ul>
  );
};

