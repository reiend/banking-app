import { PropTypes }    from "res/proptypes/proptypes";
import { AccountOption} from "res/global/constants";

import { useAccountContext }  from "res/context/AccountContext";  
import { useExpensesContext } from "res/context/ExpensesContext";

export const ExpenseItem = ({name, value, id}) => {
  const {account, setAccount: setExpenses} = useAccountContext();
  const {expenseInputRef}                  = useExpensesContext();
  const {useExpenseEdit}                   = useExpensesContext();

  const doExpenseItemDelete = () => {
    const {ExpensesOption}     = AccountOption;
    const {DELETE_EXPENSE}     = ExpensesOption;
    
    // process deleting expense
    setExpenses({type: DELETE_EXPENSE, id})
  };

  const doExpenseItemEdit = () => {
    const {expenseNameRef, expenseValueRef} = expenseInputRef;
    const {setIsEditing}                    = useExpenseEdit;
    const expenseNameObject                 = expenseNameRef.current;
    const expenseValueObject                = expenseValueRef.current;
    const expense                           = account.expenses[id];
    const [expenseName]                     = Object.keys(expense);
    const [expenseValue]                    = Object.values(expense);
    expenseNameObject.value                 = expenseName;
    expenseValueObject.value                = expenseValue;

    expenseNameRef.current.focus();
    setIsEditing(true);
    
  };

  const onClickExpenseItemDelete = () => doExpenseItemDelete();
  const onClickExpenseItemEdit   = () => doExpenseItemEdit();

  return( 
    <li id={name}>
      <span>{name}</span>-<span>{value}</span>
      <button onClick={onClickExpenseItemDelete}>X</button>
      <button onClick={onClickExpenseItemEdit}>edit</button>
    </li>
  );
};

const {ExpenseItemProptypes} = PropTypes;
ExpenseItem.propTypes        = {...ExpenseItemProptypes}

