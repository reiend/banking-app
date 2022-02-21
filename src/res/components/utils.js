import { TransactionOption, ErrorMessage } from "./contants";

export const onClickTransaction = (inputRef, set) => {
    const TRANSACTION = inputRef.current.name;
    const inputValue = parseFloat(inputRef.current.value);
    if(Number.isNaN(inputValue)) return;

    const { WITHDRAW, DEPOSIT } = TransactionOption;
    const { TRANSACTION_ERROR_MESSAGE } = ErrorMessage;

    switch(TRANSACTION) {
      case WITHDRAW: set(balance => balance + inputValue); break;
      case DEPOSIT: set(balance => balance - inputValue); break;
      default: throw new Error(TRANSACTION_ERROR_MESSAGE);
    }
    // Reset input
    inputRef.current.value = "";
};

