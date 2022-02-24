import { ExpenseInput }     from "./ExpenseInput";
import { ExpensesList }     from "./ExpensesList";
import { ExpensesContext }  from "res/context/ExpensesContext";
import { useExpenses }      from "res/states/ExpensesState";
import { useRef }           from "react";

export const Expenses = () => {
  const inputRef                  = useRef(null);
  const [isEditing, setIsEditing] = useExpenses(false);

  return(
    <section>
      <h3>Expenses</h3>
      <ExpensesContext.Provider value={{inputRef, isEditing, setIsEditing}}> 
        <ExpensesList />
        <ExpenseInput />  
      </ExpensesContext.Provider>
    </section>  
  );
};

