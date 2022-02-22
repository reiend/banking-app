import { useRef, useEffect }             from "react";
import { useAccountContext }             from "../context/AccountContext";
import { currencyFormat, formatDisplay } from "../global/utils";
import { Input }                         from "../global/components";
import { ResetValue, ErrorMessage }      from "../global/constants";
import Proptype                          from "prop-types";

export const processTransaction = (inputRef, setTransaction) => {
    const TRANSACTION = inputRef.current.name.toUpperCase();
    const inputValue  = currencyFormat(inputRef.current.value);

    const {RESET_STRING_VALUE}                    = ResetValue;
    const {INPUT_TRANSACTION_VALUE_ERROR_MESSAGE} = ErrorMessage;
    if(Number.isNaN(inputValue)) {
      inputRef.current.value = RESET_STRING_VALUE;
      throw new Error(INPUT_TRANSACTION_VALUE_ERROR_MESSAGE);
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

// old code
// export const WithdrawInput = () => {
//   const setAccount      = useAccountContext();
//   const withdrawRef     = useRef(null);
//   const onClickWithdraw = () => processTransaction(withdrawRef, setAccount);
//
//   return (
//     <div>
//       <label htmlFor="withdraw">Withdraw: </label>
//       <Input name={"withdraw"} ref={withdrawRef}/>
//       <button onClick={onClickWithdraw}>withdraw</button>
//     </div>
//   );
// };
//
// export const DepositInput = () => {
//   const setAccount     = useAccountContext();
//   const depositRef     = useRef(null);
//   const onClickDeposit = () => processTransaction(depositRef, setAccount);
//
//   return (
//     <div>
//       <label htmlFor="deposit">Deposit: </label>
//       <Input name={"deposit"} ref={depositRef}/>
//       <button onClick={onClickDeposit}>deposit</button>
//     </div>
//   );
// };

export const TransactionInput = ({transaction}) => {
  const setAccount          = useAccountContext();
  const inputRef            = useRef(null);
  const onClickTransaction  = () => processTransaction(inputRef, setAccount);

  let transactionType       = transaction.toLowerCase();
  let displayTransaction    = formatDisplay(transactionType);

  return (
    <div>
      <label htmlFor={transactionType}>{displayTransaction}: </label>
      <Input name={transactionType} ref={inputRef}/>
      <button onClick={onClickTransaction}>{transactionType}</button>
    </div>
  );
};

TransactionInput.propTypes = {transaction: Proptype.string};

