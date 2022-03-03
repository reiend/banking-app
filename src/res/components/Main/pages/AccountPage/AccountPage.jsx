import { Account }        from "./account/Account";
import { Expenses }       from "./expenses/Expenses";
import { Transactions }   from "./transactions/Transactions";
import { AccountOption }  from "res/global/constants";
import { AccountContext } from "res/context/AccountContext"

import { 
  Link,
  HStack,
  Box,
  chakra
} from "@chakra-ui/react";

import { useAccount } from "res/states/AccountState";

export const AccountPage = () => {
  const {TransactionOption}   = AccountOption;
  const [account, setAccount] = useAccount({});

  return (
    <chakra.main
      display="flex"
      marginTop="2rem"
      maxHeight="40rem"
      flexDirection={{base: "column", lg: "row"}}
      position="relative"
      h="75vh"
      zIndex="-1"
    >
      <AccountContext.Provider value={{account, setAccount}}>
        <Account/>
        {/* <Transactions {...TransactionOption}/>    */}
        {/* <Expenses/>      */}
        <HStack
          flexBasis="50%"
          display="flex"
          flexDirection="column"
          h="100%"
        >
          <Box 
            flexBasis="80%"
          >
            Test
          </Box>  
          <HStack
            flexBasis="20%"
            display="flex"
            justifyContent="space-between"
            w="80%"
          >
            <Link name="test">Transaction history</Link>
            <Link>Transaction</Link>   
            <Link>Expenses</Link>
          </HStack>
        </HStack>
      </AccountContext.Provider>
    </chakra.main>
  );
};
