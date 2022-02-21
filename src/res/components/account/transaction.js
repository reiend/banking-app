import { currencyFormat } from "../global/utils";
import { ResetValue, ErrorMessage } from "../global/constants";

export const onClickTransaction = (inputRef, setTransaction) => {
    const TRANSACTION = inputRef.current.name.toUpperCase();
    const inputValue  = currencyFormat(inputRef.current.value);

    const {RESET_STRING_VALUE}           = ResetValue;
    const {INPUT_CURRENCY_ERROR_MESSAGE} = ErrorMessage;
    if(Number.isNaN(inputValue)) {
      inputRef.current.value = RESET_STRING_VALUE;
      throw new Error(INPUT_CURRENCY_ERROR_MESSAGE);
     }

    // old code
    // const { WITHDRAW, DEPOSIT } = TransactionOption;
    // const { TRANSACTION_ERROR_MESSAGE } = ErrorMessage;
    // switch(TRANSACTION) {
    //   case WITHDRAW: set(balance => balance + inputValue); break;
    //   case DEPOSIT: set(balance => balance - inputValue); break;
    //   default: throw new Error(TRANSACTION_ERROR_MESSAGE);
    // }
  
    setTransaction({type: TRANSACTION, inputValue});

    // Reset input
    inputRef.current.value = RESET_STRING_VALUE;
};

