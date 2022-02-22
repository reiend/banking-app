import { ProcessAccount }    from "./processAccount";
import { Input }             from "../global/components";
import Proptype              from "prop-types";
import { useRef }            from "react";
import { useAccountContext } from "../context/AccountContext";
import { formatDisplay,}     from "../global/utils";

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
  const {processTransaction} = ProcessAccount;
  const setAccount           = useAccountContext();
  const inputRef             = useRef(null);
  const TRANSACTION_TYPE     = transaction.toLowerCase();
  const DISPLAY_TRANSACTION  = formatDisplay(TRANSACTION_TYPE);

  const onClickTransaction   = () => processTransaction(inputRef, setAccount);

  return (
    <div>
      <label htmlFor={TRANSACTION_TYPE}>{DISPLAY_TRANSACTION}: </label>
      <Input name={TRANSACTION_TYPE} ref={inputRef}/>
      <button onClick={onClickTransaction}>{TRANSACTION_TYPE}</button>
    </div>
  );
};

TransactionInput.propTypes = {transaction: Proptype.string};

