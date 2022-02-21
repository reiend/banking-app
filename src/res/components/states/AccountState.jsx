import { useContext, createContext, useReducer } from "react";
import { TransactionOption }                     from "../global/constants";
import { ErrorMessage }                          from "../global/constants";   

export const AccountContext = createContext(null);
export const useAccountContext = () => useContext(AccountContext);

// old code
// export const useBalance = (initialBalance) => {
//   const [balance, setBalance] = useState(initialBalance);
//   return [balance, setBalance];
// };

export const accountReducer = (state, action) => {
  const {type, inputValue}          = action;
  const {WITHDRAW, DEPOSIT}         = TransactionOption;
  const {TRANSACTION_ERROR_MESSAGE} = ErrorMessage;

  switch(type) {
    case WITHDRAW: return ({balance: state.balance - inputValue});
    case DEPOSIT:  return ({balance: state.balance + inputValue});
    default: throw new Error(TRANSACTION_ERROR_MESSAGE);
  }
};

export const useAccount = (reducer, value, initialValue) => {
  const [accountState, setAccount] = useReducer(reducer, value, initialValue);
  return [accountState, setAccount];
};

