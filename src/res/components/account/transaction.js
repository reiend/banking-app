export const onClickTransaction = (inputRef, setTransaction) => {
    const TRANSACTION = inputRef.current.name.toUpperCase();
    const inputValue  = parseFloat(inputRef.current.value);

    if(Number.isNaN(inputValue)) return;

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
    inputRef.current.value = "";
};

