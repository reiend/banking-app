import { AccountOption }     from "res/global/constants";

import { useAccountContext }  from "res/context/AccountContext";  
import { useEffect }          from "react";

export const Account = () => {
  const {ExpensesOption}       = AccountOption;
  const {UPDATE_TOTAL_EXPENSE} = ExpensesOption;

  const {account, setAccount: setExpenses} = useAccountContext();

  useEffect(() => {
    if(!account.expenses.length) return;

    const totalExpenses = account
      .expenses
        .map((expense) => Object.values(expense)[0])
        .reduce((totalExpenses, nextExpense) => totalExpenses + nextExpense);

    setExpenses({type: UPDATE_TOTAL_EXPENSE, totalExpenses});
  }, [account.isEdited]);

  return(
    <section>
      <h2>Account</h2>
      <div>ID: {account.id}</div> 
      <div>Name: {account.firstname} {account.lastname}</div> 
      <div>Balance: {account.balance}</div>
      <div>Total Expenses: {account.totalExpenses}</div>
    </section>
  );
};

