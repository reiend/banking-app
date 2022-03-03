import { Button, chakra, } from "@chakra-ui/react";
export const HeaderAgenda = () => {
  return(
    <chakra.div
      flexBasis={{base: "40%", sm: "22%"}}
      display={{base: "none", sm: "flex"}}
      justifyContent="space-between"
      bg=""
    >
      <Button
        _focus={{ 
          boxShadow:"0 0 0 0.1rem #66e18b",
          color: "#ffffff",
        }}  
        _focusWithin={{ 
          bg:"#66e18b"
        }}  
        _hover={{ 
          boxShadow:"0 0 0 0.1rem #66e18b",
          color: "#ffffff",
          bg:"#66e18b"
        }}  
        color="#3B3c54"
        bg="#ffffff"
        fontWeight="400"
        fontSize="clamp(1rem, 1.5vw, 1.5rem)"
        p={{base: "0.2rem 0.4rem", sm: "0.5rem 1rem"}}
        borderRadius="2rem"
      >
        Login
      </Button>
      <Button
        _focus={{ 
          boxShadow:"0 0 0 0.1rem #22aa4b",
        }}  
        _focusWithin={{ 
          bg:"#ffffff"
        }}  
        _hover={{ 
          color: "secondary.700",
          boxShadow:"0 0 0 0.1rem #22aa4b",
          bg:"#ffffff"
        }}  
        color="#ffffff"
        bg="#66e18b"
        fontWeight="400"
        fontSize="clamp(1rem, 1.5vw, 1.5rem)"
        borderRadius="2rem"
        p={{base: "0.2rem 0.4rem", sm: "0.5rem 1rem"}}
      >
        Get Started
      </Button>
    </chakra.div>
  );
};
