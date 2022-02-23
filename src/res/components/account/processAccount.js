import { CurrencyUtils }             from "../global/utils";
import { ResetValue } from "../global/constants";

export const ProcessAccount = {
  processTransaction: (inputRef, setTransaction) => {
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
  },
};

