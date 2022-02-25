import { AccountOption, EditingChoices} from "res/global/constants";
import { ErrorMessage, Quantity }       from "res/global/constants";

import { useReducer } from "react";

export const initialAccount = () => ({
  isEdited:  false,
  id:        "1412-4UD0",
  firstname: "jake",
  lastname:  "lonceras",
  balance:    4242,
  totalExpenses: 0,
  expenses: [
  ],
});

const accountReducer = (previousState, attribute) => {
  const {EDIT_ACCOUNT}                      = AccountOption;
  const {TransactionOption, ExpensesOption} = AccountOption;
  const {WITHDRAW, DEPOSIT}                 = TransactionOption;
  const {ADD_EXPENSE, DELETE_EXPENSE}       = ExpensesOption;
  const {EDIT_EXPENSE, PAY_EXPENSE}         = ExpensesOption;
  const {UPDATE_TOTAL_EXPENSE}              = ExpensesOption;
  const {ACCOUNT_OPTION_MESSAGE_ERROR}      = ErrorMessage;
  const {ONE}                               = Quantity;
  const {NO, YES}                           = EditingChoices;

  const { // -->
    type, 
    inputValue, 
    id,
    totalExpenses,
    expense,
    expenseValue,
  } = attribute;

  // Account operations
  const withdrawBalance = previousState.balance - inputValue;
  const depositBalance  = previousState.balance + inputValue;
  const expensesTotal   = previousState.totalExpenses + expenseValue;
  const expenseBalance  = previousState.balance - expenseValue;
  const payExpenses     = previousState.totalExpenses - expenseValue;
  const addExpense      = () => previousState.expenses.push(expense);
  const deleteExpense   = () => previousState.expenses.splice(id, ONE);
  const addEditExpense  = () => previousState.expenses.splice(id, ONE, expense);
  
  // Updated Account information
  const balanceUpdateWithdraw = {...previousState, balance: withdrawBalance};
  const balanceUpdateDeposit  = {...previousState, balance: depositBalance};
  const totalExpensesPay      = {...previousState, totalExpenses: expensesTotal};
  const expensesUpdate        = {...previousState};
  const totalExpensesUpdate   = {...previousState, totalExpenses};
  const balanceUpdatePay      = { // -->
    ...previousState, 
    balance:          expenseBalance, 
    totalExpenses:    payExpenses
  };

  // Do Account operation
  const doWithdraw    = () => ({...balanceUpdateWithdraw});
  const doDeposit     = () => ({...balanceUpdateDeposit});
  const doAdd         = () => {addExpense(); return ({...totalExpensesPay})};
  const doPay         = () => {deleteExpense(); return ({...balanceUpdatePay})};
  const doEditExpense = () => {addEditExpense(); return ({...expensesUpdate})};
  const doDelete      = () => {deleteExpense(); return ({...expensesUpdate})};

  // Acount options
  switch(type) {
    case WITHDRAW:             return doWithdraw();
    case DEPOSIT:              return doDeposit();
    case ADD_EXPENSE:          return doAdd();
    case PAY_EXPENSE:          return doPay();
    case DELETE_EXPENSE:       return doDelete();
    case EDIT_EXPENSE:         return doEditExpense();
    case UPDATE_TOTAL_EXPENSE: return {...totalExpensesUpdate, isEdited: NO};
    case EDIT_ACCOUNT:         return {...previousState, isEdited: YES};
    default:                   throw new Error(ACCOUNT_OPTION_MESSAGE_ERROR);
  }
};
    
export const useAccount = (value) => {
  return useReducer(accountReducer, value, initialAccount);
};

