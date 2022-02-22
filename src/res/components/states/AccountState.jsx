import { AccountOption, ErrorMessage } from "../global/constants";
import { useReducer }                  from "react";

export const initialAccount = () => ({
  id:        "1412-4UD0",
  firstname: "jake",
  lastname:  "lonceras",
  balance:    4242,
  expenses: [
    {waterBill:    1111},
    {electricBill: 4444},
    {internetBill: 2222},
  ],
});

// old code
// export const useBalance = (initialBalance) => {
//   const [balance, setBalance] = useState(initialBalance);
//   return [balance, setBalance];
// };

const accountReducer = (previousState, action) => {
  const {TransactionOption, ExpenseOption}          = AccountOption;
  const {WITHDRAW, DEPOSIT}                         = TransactionOption;
  const {ADD_EXPENSE, DELETE_EXPENSE, EDIT_EXPENSE} = ExpenseOption;
  const {ACCOUNT_OPTION_MESSAGE_ERROR}              = ErrorMessage;
  const {type, inputValue, expense}                 = action;

  const withdrawBalance = previousState.balance - inputValue;
  const depositBalance  = previousState.balance + inputValue;
  const addExpense      = () => previousState.expenses.push(expense);

  console.log(previousState);

  // Acount options
  switch(type) {
    case WITHDRAW:    return {...previousState, balance: withdrawBalance};
    case DEPOSIT:     return {...previousState, balance: depositBalance};
    case ADD_EXPENSE: addExpense(); return {...previousState};
    default:          throw new Error(ACCOUNT_OPTION_MESSAGE_ERROR);
  }
};

export const useAccount = (value) => {
  const [account, setAccount] = useReducer(accountReducer, value, initialAccount);
  return [account, setAccount];
};

