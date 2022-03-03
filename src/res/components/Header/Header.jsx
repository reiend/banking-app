import { HeaderTitle }  from "./HeaderTitle";  
import { HeaderSearch } from "./HeaderSearch";
import { HeaderAgenda } from "./HeaderAgenda";
import { Navbar }       from "./Navbar";
import { Flex, chakra } from "@chakra-ui/react";
import { useState }           from "react";

export const Header = ()  => {
  const [isShow, setIsShow] = useState(false);
  const onClickShow         = () => setIsShow((isShow) => !isShow);
  return (
    <chakra.header 
      p="1rem 0"
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
        <HeaderSearch isShow={isShow} onClickShow={onClickShow}/>
        <HeaderAgenda/>
        <chakra.div 
          pos="absolute"
          width="100%"
          height="0.05rem"
          bottom="-0.5rem"
          bg="#3B3C54"
        />
      </Flex>
      <Navbar  isShow={isShow} onClickShow={onClickShow}/>
    </chakra.header>
  );
};
