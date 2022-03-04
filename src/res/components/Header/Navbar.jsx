import { Random }         from "res/global/utils";
import { HamburgerIcon }  from "@chakra-ui/icons";
import { Button, chakra } from "@chakra-ui/react";

import { useAppControllerContext } from "res/context/AppControllerContext";

export const Navbar = () => {
  const {isShow, setIsShow} = useAppControllerContext();
  const onClickShow         = () => setIsShow((isShow) => !isShow);

  const navbarLists = [
    "Home",
    "Learn more",
    "FAQs",
    "Invest",
    "Pay biils"
  ];

  return (
    <chakra.nav
      flexBasis="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop="1.2rem"
      pos={{base: "fixed", md: "static"}}
      right="2rem"
      zIndex="1"
     >
      <Button 
        display={{base: "block", md: "none"}}
        top={{base: "85vh", sm: `${!isShow? "50vh" : "85vh"}`}}
        onClick={onClickShow}
        transition="100ms ease-in-out"
      >
        <HamburgerIcon/>  
      </Button> 

      <chakra.ul 
        display={{base: `${!isShow? "none" : "flex"}`, md: "flex"}}
        flexBasis="70%"
        maxWidth="50rem"
        justifyContent={{base: `space-around`, md: "space-between"}}
        flexDirection={{base: "column", md: "row"}}
        pos={{base: "fixed", md: "static"}}
        top="45vh"
        textAlign="center"
        h="40%"
      >
        {
          navbarLists
            .map(navbarList => 
              <chakra.li 
                cursor="pointer"
                _hover={{color: "#66e18b"}}
                listStyleType="none"
                fontWeight="500"
                color="#3b3c54"
                fontSize="fluid-1"
                pos="relative"
                key={Random.getKey(navbarList)}
                transition="color 200ms linear"
              >
                {navbarList}
              </chakra.li>)
        }
      </chakra.ul>
  </chakra.nav>
  );
};

