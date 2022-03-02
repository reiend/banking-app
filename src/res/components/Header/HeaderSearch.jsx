import { SearchIcon }    from "@chakra-ui/icons";
import { Input, chakra } from "@chakra-ui/react";

export const HeaderSearch = () => {
  return (
    <chakra.form action="/" 
      flexBasis="30%"
      maxWidth="30rem"    
      display={{base: "none", md: "block"}}
      >
      <chakra.div
        pos="relative"> 
        <SearchIcon 
          fontSize="clamp(1rem, 1vw, 1.5rem)"
          pos="absolute"
          top="50%"
          left="0.5rem"
          transform="translateY(-50%)" />
        <Input 
          _focus={{
            border:"0.1rem solid #66e18b",
          }}
          fontSize="clamp(1.25rem, 1vw, 1.75rem)"
          pl="clamp(1.75rem, 2vw, 2.5rem)"
          width="100%"
          type="text" 
          name="navbar-search" 
          id="navbar-search"
          placeholder="Search"
        />
      </chakra.div>
    </chakra.form>
  )
};

