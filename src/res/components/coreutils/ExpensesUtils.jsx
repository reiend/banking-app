import { ProcessAccount }    from "../account/processAccount";  
import { PropTypes }         from "../proptypes/proptypes";
import { useExpensesList }   from "../states/ExpensesListState";
import { useAccountContext } from "../context/AccountContext";  
import { useEffect } from "react";

export const ExpenseItem = ({name, value, id}) => {
  const {processExpenseItemDelete} = ProcessAccount;
  const {setAccount}               = useAccountContext();

  const onClickItemDelete  = () => processExpenseItemDelete(id, setAccount);

  return( 
    <li id={name}>
      <span>{name}</span>-<span>{value}</span>
      <button onClick={onClickItemDelete}>X</button>
      <button>edit</button>
    </li>);
};

export const ExpensesList = () => {
  const {processExpensesList}           = ProcessAccount;
  const [expensesList, setExpensesList] = useExpensesList();
  const {account}                       = useAccountContext();
  const expensesLength                  = account.expenses.length;

  useEffect(processExpensesList(account, setExpensesList), [expensesLength]);

  return( <ul>{expensesList}</ul>);
};

const {ExpenseItemProptypes} = PropTypes;
ExpenseItem.prototypes       = {...ExpenseItemProptypes}

