import { Account } from "./account/Account";
import { AccountContext } from "res/context/AccountContext"
import { HStack, chakra } from "@chakra-ui/react";
import { Expenses } from "./expenses/Expenses";
import { Transactions } from "./transactions/Transactions";
import { AccountOption } from "res/global/constants";

import { useState, useEffect } from "react";
import { useAccount } from "res/states/AccountState";
import { useAppControllerContext } from "res/context/AppControllerContext";

export const AccountPage = () => {
  const {TransactionOption}   = AccountOption;
  const [account, setAccount] = useAccount({});
  const [accountOption, setAccountOption] = useState(null);

  // apply necessary style when navbar list was shown to avoid index problem
  const {isShow} = useAppControllerContext();

  // select account option e.g transaction, expenses
  const onClickAccountOption = (event) => {
    if(event.target.name === "expenses") {
      setAccountOption( <Expenses/>);
    }
    else if(event.target.name === "transactions") {
      setAccountOption( <Transactions {...TransactionOption}/>);
    }
  };

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
        <HStack
          flexBasis={{base: "30%", md: "50%"}}
          display="flex"
          flexDirection="column"
          h="100%"
          p="0 2rem"
        >
          <chakra.div
            flexBasis="90%"
            display="flex"    
            alignItems="center"
            w="100%"
          >
            {accountOption}
          </chakra.div>
          <HStack
            flexBasis="5%"
            display="flex"
            justifyContent="space-evenly"
            fontSize="fluid-500"  
            w="100%"
            flexDirection={{base: "column", md: "row"}}
          >
            <chakra.a 
              name="transactions"
              onClick={onClickAccountOption}
              _hover={{
                color: "primary.300"
              }}
              cursor="pointer"
            >
              Transaction
            </chakra.a>    
            <chakra.a 
              name="expenses"
              onClick={onClickAccountOption}
              _hover={{
                color: "primary.300"
              }}
              cursor="pointer"
            >
              Expenses
            </chakra.a>    
          </HStack>
        </HStack>
      </AccountContext.Provider>
    </chakra.main>
  );
};

