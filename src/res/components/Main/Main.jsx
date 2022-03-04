import { AccountPage } from "./pages/AccountPage/AccountPage";
import { chakra }      from "@chakra-ui/react";

export const Main = () => {
  return (
    <chakra.div 
      pos="relative"
    >
      <AccountPage/>
      {/* <LoginPage/> */}
    </chakra.div>
  );
};

