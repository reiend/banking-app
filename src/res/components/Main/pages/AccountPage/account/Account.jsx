import { CgProfile }     from "react-icons/cg";
import { 
  Text,
  Box,
  Icon, 
  chakra
}  from "@chakra-ui/react";

import { useAccountContext }  from "res/context/AccountContext";  

export const Account = () => {
  const {account} = useAccountContext();
  const { 
    id, 
    firstname, 
    lastname, 
    balance, 
    totalExpenses, 
  } = account;

  const accountInfoTextStyle = {
    display:"flex",
    justifyContent:"space-between",
    w:"100%",
    fontSize:"fluid-500",
    fontWeight:"600",
    color: "primary.800"
  };

  return(
    <chakra.section
      flexBasis="50%"    
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        textAlign="center"
        flexDirection="column"
        h="100%"
        w={{base: "100%", md: "70%"}}
        p="2rem"
      >
        <Icon
          fontSize="6rem"
          as={CgProfile}
        />
        <chakra.h2  
          fontStyle="italic"
          fontWeight="700"
        >
          Account information
        </chakra.h2>
        <Text as="div"{...accountInfoTextStyle}>
          <chakra.span>ID:</chakra.span>
          <chakra.span fontStyle="italic">{id}</chakra.span>
        </Text>
        <Text as="div"{...accountInfoTextStyle} isTruncated>
          <chakra.span>Name:</chakra.span>
          <chakra.span>{firstname} {lastname}</chakra.span>
        </Text>
        <Text as="div"{...accountInfoTextStyle}>
          <chakra.span>Balance:</chakra.span>
          <chakra.span>{balance}</chakra.span>
        </Text>
        <Text as="div"{...accountInfoTextStyle}>
          <chakra.span>Total Expenses:</chakra.span>
          <chakra.span>{totalExpenses}</chakra.span>
        </Text>
      </Box>
    </chakra.section>
  );
};

