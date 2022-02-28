import { NavbarBrand }  from "./NavbarBrand";
import { NavbarSearch } from "./NavbarSearch";
import { NavbarList }   from "./NavbarList";

export const Navbar = () => {
  return (
    <nav className="">
      <NavbarBrand/>
      <NavbarSearch/>
      <NavbarList/>
    </nav>  
  );
};

