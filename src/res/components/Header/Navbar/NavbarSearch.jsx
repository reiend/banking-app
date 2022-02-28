import { SearchIcon } from "res/global/components";

export const NavbarSearch = () => {
  return (
    <div>
      <label 
        htmlFor="navbar-search"
        >
        <SearchIcon/>
      </label>  
      <form action="/">
        <input 
          type="text" 
          name="navbar-search" 
          id="navbar-search"
          placeholder="Search"
        />
      </form>
    </div>
  )
};

