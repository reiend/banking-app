import Proptype                  from "prop-types";
import { ResetValue, EMPTY_REF } from "res/global/constants";
import { Input }                 from "res/global/components";
import { CurrencyUtils }         from "res/global/utils";
import { Button, chakra }        from "@chakra-ui/react";

import { useAccountContext } from "res/context/AccountContext";
import { formatDisplay }     from "res/global/utils";
import { useRef }            from "react";

export const TransactionInput = ({transaction}) => {
  const {setAccount: setTransaction} = useAccountContext();
  const inputRef                     = useRef(EMPTY_REF);
  const TRANSACTION_TYPE             = transaction.toLowerCase();
  const DISPLAY_TRANSACTION          = formatDisplay(TRANSACTION_TYPE);

  const processTransaction = () => {
    const {RESET_STRING_VALUE}                = ResetValue;
    const {currencyFormat, isInvalidCurrency} = CurrencyUtils;

    const TRANSACTION = inputRef.current.name.toUpperCase();
    const inputValue  = currencyFormat(inputRef.current.value);

    if(isInvalidCurrency(inputValue)) {
      inputRef.current.value = RESET_STRING_VALUE;
    }

    // process transaction
    setTransaction({type: TRANSACTION, inputValue});

    // Reset input
    inputRef.current.value = RESET_STRING_VALUE;
  };

  const onClickTransaction = () => processTransaction();

  return (
    <chakra.div
      display="flex"
      flexDirection="column"
      w="100%"
      alignItems="center"
      justifyContent="space-between"
      marginTop={{base: "0.2rem", lg: "3rem"}}
    >
      <label htmlFor={TRANSACTION_TYPE}>{DISPLAY_TRANSACTION}: </label>
      <Input name={TRANSACTION_TYPE} ref={inputRef}/>
      <Button 
          marginTop={{base: "0.5rem", lg: "2rem"}} 
          onClick={onClickTransaction}
      >
        {TRANSACTION_TYPE}
      </Button>
    </chakra.div>
  );
};

TransactionInput.protoTypes = {transaction: Proptype.string};
