import { CurrencyUtils }     from "../global/utils";
import { ResetValue }        from "../global/constants";

export const ProcessAccount = {
  processTransaction: (inputRef, setTransaction) => {
    const {RESET_STRING_VALUE}                = ResetValue;
    const {currencyFormat, isInvalidCurrency} = CurrencyUtils;

    const TRANSACTION = inputRef.current.name.toUpperCase();
    const inputValue  = currencyFormat(inputRef.current.value);

    if(isInvalidCurrency(inputValue)) {
      inputRef.current.value = RESET_STRING_VALUE;
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
  },
  processExpense: (event, setAccount) => {
    event.preventDefault();
    const {RESET_STRING_VALUE}                 = ResetValue;
    const {isInvalidCurrency, currencyFormat}  = CurrencyUtils;

    const expenseNameObject  = event.target.expenseName;
    const expenseValueObject = event.target.expenseValue;
    const expenseName        = expenseNameObject.value;
    const expenseValue       = currencyFormat(expenseValueObject.value);

    if(isInvalidCurrency(expenseValue)) {
      expenseValueObject.value = RESET_STRING_VALUE;
    }

    const expense = {[expenseName]: expenseValue};

    setAccount({type: "ADD_EXPENSE", expense});
    
    // Reset form
    expenseNameObject.value  = RESET_STRING_VALUE;
    expenseValueObject.value = RESET_STRING_VALUE;
  },
};

