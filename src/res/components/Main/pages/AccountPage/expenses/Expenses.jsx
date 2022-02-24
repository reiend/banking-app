import { EMPTY_REF }       from "res/global/constants"; 
import { ExpenseInput }    from "./ExpenseInput";
import { ExpensesList }    from "./ExpensesList";
import { ExpensesContext } from "res/context/ExpensesContext";

import { useExpenses } from "res/states/ExpensesState";
import { useRef }      from "react";

export const Expenses = () => {
  const expenseNameRef            = useRef(EMPTY_REF);
  const expenseValueRef           = useRef(EMPTY_REF);
  const [isEditing, setIsEditing] = useExpenses();
  const expenseInputRef           = {expenseNameRef, expenseValueRef};
  const useExpenseEdit            = {isEditing, setIsEditing};

  return(
    <section>
      <h3>Expenses</h3>
      <ExpensesContext.Provider value={{expenseInputRef, useExpenseEdit}}> 
        <ExpensesList />
        <ExpenseInput />  
      </ExpensesContext.Provider>
    </section>  
  );
};

