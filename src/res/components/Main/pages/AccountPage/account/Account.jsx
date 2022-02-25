import { AccountOption, ExpenseInfo } from "res/global/constants";

import { useAccountContext }  from "res/context/AccountContext";  
import { useEffect }          from "react";

export const Account = () => {
  const {ExpensesOption}       = AccountOption;
  const {UPDATE_TOTAL_EXPENSE} = ExpensesOption;
  const {EXPENSE_VALUE}        = ExpenseInfo;

  const {account, setAccount: setExpenses} = useAccountContext();
  const {
    isEdited, 
    id, 
    firstname, 
    lastname, 
    balance,
    totalExpenses,
  } = account;
  
  // Update Total Expenses display
  useEffect(() => {
    if(!account.expenses.length) return;
    const totalExpenses = account
      .expenses
        .map((expense) => Object.values(expense)[EXPENSE_VALUE])
        .reduce((totalExpenses, nextExpense) => totalExpenses + nextExpense);
    setExpenses({type: UPDATE_TOTAL_EXPENSE, totalExpenses});
  }, [isEdited]);

  return(
    <section>
      <h2>Account</h2>
      <div>ID: {id}</div> 
      <div>Name: {firstname} {lastname}</div> 
      <div>Balance: {balance}</div>
      <div>Total Expenses: {totalExpenses}</div>
    </section>
  );
};

