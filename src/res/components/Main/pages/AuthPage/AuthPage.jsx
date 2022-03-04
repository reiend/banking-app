
import { chakra } from "@chakra-ui/react";
import { Login } from "./Login";
import { Signup } from "./Signup";

export const AuthPage = () => {
  return(
      <chakra.div
        display="flex"
        marginTop={{base: "none", md: "5rem"}}
        justifyContent="center"
        alignItems="center"
        maxHeight="40rem"
        position="relative"
        h={{base:"80vh", md:"70vh"}}
      >
        <Login/>  
      </chakra.div>
  );
};
