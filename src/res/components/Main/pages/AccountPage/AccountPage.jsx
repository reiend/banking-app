import { Account } from "./account/Account";
import { AccountContext } from "res/context/AccountContext"
import { AccountOptionRoutes } from "./AccountOptionRoutes";
import { chakra } from "@chakra-ui/react";

import { useAccount } from "res/states/AccountState";
import { useAppControllerContext } from "res/context/AppControllerContext";

export const AccountPage = () => {
  const [account, setAccount] = useAccount({});
  const {isShow} = useAppControllerContext();

  return (
    <chakra.main
      display="flex"
      marginTop={{base: "none", md: "5rem"}}
      maxHeight="40rem"
      flexDirection={{base: "column", lg: "row"}}
      position="relative"
      h={{base:"80vh", md:"70vh"}}
      zIndex={{base: `${!isShow? "0" : "-1"}`, lg: "0"}}
    >
      <AccountContext.Provider value={{account, setAccount}}>
        <Account/>
        <AccountOptionRoutes/>
      </AccountContext.Provider>
    </chakra.main>
  );
};

