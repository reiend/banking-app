import { HeaderTitle }  from "./HeaderTitle";  
import { HeaderSearch } from "./HeaderSearch";
import { HeaderAgenda } from "./HeaderAgenda";
import { Navbar }       from "./Navbar";
import { Flex, chakra } from "@chakra-ui/react";

export const Header = ()  => {
  return (
    <chakra.header 
      p="1rem 2rem"
      display="flex"
      flexWrap="wrap"
    >
      <Flex 
        flexBasis="100%"
        justifyContent={{base: "center", sm: "space-between"}}
        alignItems="center"
        pos="relative"
      >
        <HeaderTitle/>
        <HeaderSearch/>
        <HeaderAgenda/>
        <chakra.div 
          pos="absolute"
          width="100%"
          height="0.05rem"
          bottom="-0.5rem"
          bg="#3B3C54"
        >
        </chakra.div>
      </Flex>
      <Navbar/>
    </chakra.header>
  );
};
