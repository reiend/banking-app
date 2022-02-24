import { PropTypes }          from "res/proptypes/proptypes";
import { AccountOption}       from "res/global/constants";
import { useAccountContext }  from "res/context/AccountContext";  
import { useExpensesContext } from "res/context/ExpensesContext";

const processExpenseItemDelete = ({id, setAccount: setExpenses}) => {
  const {ExpensesOption} = AccountOption;
  const {DELETE_EXPENSE} = ExpensesOption;
  
  // process deleting expense
  setExpenses({type: DELETE_EXPENSE, id})
};

export const ExpenseItem = ({name, value, id}) => {
  const {account, setAccount} = useAccountContext();
  const {inputRef}            = useExpensesContext();
  const {setIsEditing}        = useExpensesContext();
  const deleteParams          = {id, inputRef, setAccount};
  const editParams            = {...deleteParams, account, setIsEditing};
  const onClickItemDelete     = () => processExpenseItemDelete(deleteParams);

  return( 
    <li id={name}>
      <span>{name}</span>-<span>{value}</span>
      <button onClick={onClickItemDelete}>X</button>
      <button>edit</button>
    </li>
  );
};

const {ExpenseItemProptypes} = PropTypes;
ExpenseItem.propTypes        = {...ExpenseItemProptypes}

