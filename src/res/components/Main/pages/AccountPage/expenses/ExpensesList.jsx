import { ExpenseItem }      from "./ExpenseItem";
import { Random }           from "res/global/utils";
import { ExpensesListInfo } from "res/global/constants";
import { chakra }           from "@chakra-ui/react";

import { useAccountContext }  from "res/context/AccountContext";
import { useExpensesList }    from "res/states/ExpensesListState";
import { useExpensesContext } from "res/context/ExpensesContext";
import { useEffect }          from "react";

export const ExpensesList = () => {
  const {ZERO} = ExpensesListInfo;

  const [expensesList, setExpensesList] = useExpensesList();
  const {account}                       = useAccountContext();
  const {useExpenseItem}                = useExpensesContext();
  const {balance}                       = account;
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

    setExpensesList(account.expenses.map(expensesListRaw).reverse());
  };

  useEffect(doExpensesList(), [expensesLength, isEditing, balance]);
  const hasExpenses = account.expenses.length !== ZERO;

  return(
    <chakra.div
      fontSize="fluid-200"
      flexBasis="80%"
    >
      {hasExpenses  
        && <chakra.h4
            textAlign="center"
            fontStyle="italic"        
           >
            List of Expenses
          </chakra.h4>}
      {hasExpenses  
          && <chakra.ul
                overflowY="scroll"
                maxHeight="13rem"
                p="2rem"
                listStyleType="none"
             >
              {expensesList}
            </chakra.ul>}

      {!hasExpenses 
          && <chakra.h4
              textAlign="center"
              transform={{base: "translateY(0)", lg: "translateY(6rem)"}}
             >
              No Expenses yet
            </chakra.h4> 
      }
    </chakra.div>
  );
};

