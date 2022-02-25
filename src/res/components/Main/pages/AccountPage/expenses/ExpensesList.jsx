import { ExpenseItem } from "./ExpenseItem";
import { Random }      from "res/global/utils";

import { useAccountContext }  from "res/context/AccountContext";
import { useExpensesList }    from "res/states/ExpensesListState";
import { useExpensesContext } from "res/context/ExpensesContext";
import { useEffect }          from "react";


export const ExpensesList = () => {
  const [expensesList, setExpensesList] = useExpensesList();
  const {account}                       = useAccountContext();
  const {useExpenseItem}                = useExpensesContext();
  const {expenseItem}                   = useExpenseItem;
  const {isEditing}                     = expenseItem;
  const expensesLength                  = account.expenses.length;

  const doExpensesList = () => () => {
    const expensesListRaw = ((expense, i) => {
      const [name]          = Object.keys(expense);
      const [value]         = Object.values(expense);
      const expenseItemKey  = Random.getKey(name);
      const expenseItemInfo = { name: `${name}`, value: `${value}`, }
      return <ExpenseItem key={expenseItemKey} {...expenseItemInfo} id={i}/>;
    });

    setExpensesList(account.expenses.map(expensesListRaw));
  };

  useEffect(doExpensesList(), [expensesLength, isEditing]);

  return(
    <div>
      <h4>List of Expenses</h4>
      <ul>{expensesList}</ul>
    </div>
  );
};

