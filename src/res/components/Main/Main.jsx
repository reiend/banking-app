import { AccountPage } from "./pages/AccountPage/AccountPage";
import { chakra }      from "@chakra-ui/react";
import { PagesRoute }  from "./PagesRoute";

export const Main = () => {
  return (
    <chakra.div 
      pos="relative"
    >
      {/* <AccountPage/> */}
      {/* <LoginPage/> */}
      <PagesRoute/>
    </chakra.div>
  );
};

