import { Button, chakra, } from "@chakra-ui/react";

export const HeaderAgenda = () => {
  return(
    <chakra.div
      display={{base: "none", sm: "flex"}}
      justifyContent="space-between"
      bg=""
    >
      <Button
        variant="outline"
        fontWeight="400"
        fontSize="fluid-400"
        borderRadius="2rem"
        p={{base: "0.2rem 0.4rem", sm: "0.5rem 1rem"}}
        marginRight="2rem"
      >
        Login
      </Button>
      <Button
        fontWeight="400"
        fontSize="fluid-400"
        borderRadius="2rem"
        p={{base: "0.2rem 0.4rem", sm: "0.5rem 1rem"}}
      >
        Get Started
      </Button>
    </chakra.div>
  );
};
