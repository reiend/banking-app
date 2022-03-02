import { Random }          from "res/global/utils";
import { Divider, chakra } from "@chakra-ui/react";

export const Navbar = () => {
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
      display={{base: "none", md: "flex"}}
      justifyContent="center"
      alignItems="center"
      marginTop="1.2rem"
     >
      <chakra.ul 
        display='flex'
        flexBasis="70%"
        maxWidth="50rem"
        justifyContent="space-around"
      >
        {
          navbarLists
            .map(navbarList => 
              <chakra.li 
                listStyleType="none"
                fontWeight="500"
                color="#3B3C54"
                fontSize="clamp(1rem, 0.5vw, 1.25rem)"
                key={Random.getKey(navbarList)}
              >
                {navbarList}
              </chakra.li>)
        }
      </chakra.ul>
    </chakra.nav>
  );
};

