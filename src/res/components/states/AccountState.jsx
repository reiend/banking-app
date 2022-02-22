import { useReducer }        from "react";
import { TransactionOption } from "../global/constants";
import { ErrorMessage }      from "../global/constants";   

export const initialAccount = () => ({
  firstname: "jake",
  lastname:  "lonceras",
  balance:    1000,
});

// old code
// export const useBalance = (initialBalance) => {
//   const [balance, setBalance] = useState(initialBalance);
//   return [balance, setBalance];
// };

const accountReducer = (previous, action) => {
  const {type, inputValue}          = action;
  const {WITHDRAW, DEPOSIT}         = TransactionOption;
  const {TRANSACTION_ERROR_MESSAGE} = ErrorMessage;

  switch(type) {
    case WITHDRAW: return {balance: previous.balance - inputValue};
    case DEPOSIT:  return {balance: previous.balance + inputValue};
    default:       throw new Error(TRANSACTION_ERROR_MESSAGE);
  }
};

export const useAccount = (value) => {
  const [account, setAccount] = useReducer(accountReducer, value, initialAccount);
  return [account, setAccount];
};

