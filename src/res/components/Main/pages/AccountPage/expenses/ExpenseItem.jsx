import { PropTypes }         from "../../../../../proptypes/proptypes";
import { AccountOption}      from "../../../../../global/constants";
import { useAccountContext } from "../../../../../context/AccountContext";  

const processExpenseItemDelete = (id, setExpenses) => {
  const {ExpensesOption} = AccountOption;
  const {DELETE_EXPENSE} = ExpensesOption;
  
  // process deleting expense
  setExpenses({type: DELETE_EXPENSE, id})
};

export const ExpenseItem = ({name, value, id}) => {
  const {setAccount}       = useAccountContext();

  const onClickItemDelete  = () => processExpenseItemDelete(id, setAccount);

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

