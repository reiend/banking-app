import { EMPTY_REF }       from "res/global/constants"; 
import { ExpenseInput }    from "./ExpenseInput";
import { ExpensesList }    from "./ExpensesList";
import { ExpensesContext } from "res/context/ExpensesContext";

import { useExpenses }     from "res/states/ExpensesState";
import { useRef }          from "react";

export const Expenses = () => {
  const expenseNameRef                = useRef(EMPTY_REF);
  const expenseValueRef               = useRef(EMPTY_REF);
  const [expenseItem, setExpenseItem] = useExpenses();
  const expenseInputRef               = {expenseNameRef, expenseValueRef};
  const useExpenseItem                = {expenseItem, setExpenseItem};

  return(
    <section className="">
      <h3>Expenses</h3>
      <ExpensesContext.Provider value={{expenseInputRef, useExpenseItem}}> 
        <ExpensesList />
        <ExpenseInput />  
      </ExpensesContext.Provider>
    </section>  
  );
};

