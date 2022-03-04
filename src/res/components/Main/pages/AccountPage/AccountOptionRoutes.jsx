import { AccountOption } from "res/global/constants";
import { Expenses } from "./expenses/Expenses";
import { Transactions } from "./transactions/Transactions";
import { HStack, Box, chakra } from "@chakra-ui/react";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link,
  Outlet,
} from "react-router-dom";

const AccountOptionLinks = () => {
  return (
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
        <Outlet />
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
          as={Link} 
          to="/transactions"
          _hover={{
            color: "primary.300"
          }}
        >
          Transaction
        </chakra.a>    
        <chakra.a 
          as={Link} 
          to="/expenses"
          _hover={{
            color: "primary.300"
          }}
        >
          Expenses
        </chakra.a>    
      </HStack>
    </HStack>
  );
};

export const AccountOptionRoutes = () => {
  const {TransactionOption}   = AccountOption;
  return(
    <Router>
      <Routes>
        <Route path="/" element={ <AccountOptionLinks/> }>
            <Route 
              path="transactions" 
              element={ <Transactions {...TransactionOption}/> }
            />
            <Route path="expenses" element={ <Expenses/> }/>
            <Route path="*" element={ <div/> }/>
        </Route>
      </Routes>
    </Router>
  );
};

