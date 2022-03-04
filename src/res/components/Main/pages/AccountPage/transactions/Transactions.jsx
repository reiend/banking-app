import Proptype             from "prop-types";
import { TransactionInput } from "./TransactionInput";
import { chakra }           from "@chakra-ui/react";

export const Transactions = ({WITHDRAW, DEPOSIT}) => {
  return(
    <chakra.section className=""
      display="flex"
      flexDirection="column"
      w="80%"
      m="0 auto"
    >
      <chakra.h3
        fontWeight="700"
        fontSize="fluid-500"
      >
        Transaction
      </chakra.h3>
      <TransactionInput transaction={DEPOSIT}/>
      <TransactionInput transaction={WITHDRAW}/>
    </chakra.section>
  );
};

Transactions.propTypes = {
  WITHDRAW: Proptype.string,
  DEPOSIT:  Proptype.string,
};
