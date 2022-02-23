import { ExpenseItem }       from "./ExpenseItem";
import { Random }            from "../../../global/utils";
import { useExpensesList }   from "../../../states/ExpensesListState";
import { useAccountContext } from "../../../context/AccountContext";
import { useEffect }         from "react";

const processExpensesList = (account, setExpensesList) => {
  return () => setExpensesList(account.expenses.map((expense, i)=> {
    const [name]          = Object.keys(expense);
    const [value]         = Object.values(expense);
    const expenseItemKey  = Random.getKey(name);
    const expenseItemInfo = { name: `${name}`, value: `${value}`, }

    return <ExpenseItem key={expenseItemKey} {...expenseItemInfo} id={i}/>;
  }));
};

export const ExpensesList = () => {
  const [expensesList, setExpensesList] = useExpensesList();
  const {account}                       = useAccountContext();
  const expensesLength                  = account.expenses.length;

  useEffect(processExpensesList(account, setExpensesList), [expensesLength]);

  return(
    <div>
      <h4>List of Expenses</h4>
      <ul>{expensesList}</ul>
    </div>
  );
};

