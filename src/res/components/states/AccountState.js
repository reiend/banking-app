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

const accountReducer = (previousState, attribute) => {
  const {TransactionOption, ExpensesOption}           = AccountOption;
  const {WITHDRAW, DEPOSIT}                           = TransactionOption;
  const {ADD_EXPENSE, DELETE_EXPENSE, EDIT_EXPENSE}   = ExpensesOption;
  const {ACCOUNT_OPTION_MESSAGE_ERROR}                = ErrorMessage;
  const {type, inputValue, expense, expenseValue, id} = attribute;
  
  // Account operations
  const withdrawBalance  = previousState.balance - inputValue;
  const depositBalance   = previousState.balance + inputValue;
  const deductBalance    = previousState.balance - expenseValue;
  const addExpense       = () => previousState.expenses.push(expense);
  const deleteExpense    = () => previousState.expenses.splice(id, 1);

  // Updated Account information
  const balanceUpdateWithdraw = {...previousState, balance: withdrawBalance};
  const balanceUpdateDeposit  = {...previousState, balance: depositBalance};
  const balanceUpdateDeduc    = {...previousState, balance: deductBalance};
  const expensesUpdate        = {...previousState};

  // Acount options
  switch(type) {
    case WITHDRAW:        return {...balanceUpdateWithdraw};
    case DEPOSIT:         return {...balanceUpdateDeposit};
    case ADD_EXPENSE:     addExpense(); return {...balanceUpdateDeduc};
    case DELETE_EXPENSE:  deleteExpense(); return {...expensesUpdate};
    default:              throw new Error(ACCOUNT_OPTION_MESSAGE_ERROR);
  }
};

export const useAccount = (value) => {
  const [account, setAccount] = useReducer(accountReducer, value, initialAccount);
  return [account, setAccount];
};

