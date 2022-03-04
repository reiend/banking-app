import { EMPTY_REF }       from "res/global/constants"; 
import { ExpenseInput }    from "./ExpenseInput";
import { ExpensesList }    from "./ExpensesList";
import { ExpensesContext } from "res/context/ExpensesContext";
import { chakra }          from "@chakra-ui/react";

import { useExpenses }     from "res/states/ExpensesState";
import { useRef }          from "react";

export const Expenses = () => {
  const expenseNameRef                = useRef(EMPTY_REF);
  const expenseValueRef               = useRef(EMPTY_REF);
  const [expenseItem, setExpenseItem] = useExpenses();
  const expenseInputRef               = {expenseNameRef, expenseValueRef};
  const useExpenseItem                = {expenseItem, setExpenseItem};

  return(
    <chakra.section 
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      h="80%"
      w="100%"
    >
      <chakra.h3
        flexBasis="10%"
        fontWeight="700"
        fontSize="fluid-400"
      >
        Expenses
      </chakra.h3>
      <ExpensesContext.Provider value={{expenseInputRef, useExpenseItem}}> 
        <ExpensesList />
        <ExpenseInput />  
      </ExpensesContext.Provider>
    </chakra.section>  
  );
};

