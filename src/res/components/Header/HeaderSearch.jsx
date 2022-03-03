import { SearchIcon }    from "@chakra-ui/icons";
import { Input, chakra } from "@chakra-ui/react";

import { useAppControllerContext } from "res/context/AppControllerContext";

export const HeaderSearch = () => {
  const {isShow} = useAppControllerContext();

  return (
    <chakra.form action="/" 
      flexBasis="40%"
      maxWidth="40rem"    
      display={{base: `${!isShow? "none": "block"}`, md: "block"}}
      pos={{base: `${!isShow? "static" : "absolute"}`, md: "static"}}
      top="88vh"
      left="0"
      w={{base: "50%", md: "auto"}}
      justifySelf="flex-start"
      >
      <chakra.div
        pos="relative"> 
        <SearchIcon 
          fontSize="fluid-200"
          pos="absolute"
          top="50%"
          left="0.5rem"
          zIndex="1"
          transform="translateY(-50%)" />
        <Input 
          fontSize="fluid-300"
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

