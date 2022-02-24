import { PropTypes }    from "res/proptypes/proptypes";
import { AccountOption} from "res/global/constants";

import { useAccountContext }  from "res/context/AccountContext";  
import { useExpensesContext } from "res/context/ExpensesContext";

const doExpenseItemDelete = ({id, setAccount: setExpenses }) => {
  const {ExpensesOption}     = AccountOption;
  const {DELETE_EXPENSE}     = ExpensesOption;
  
  // process deleting expense
  setExpenses({type: DELETE_EXPENSE, id})
};

const doExpenseItemEdit = (editParams) => {
  const {id, account}                     = editParams;
  const {expenseInputRef, useExpenseEdit} = editParams;
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

export const ExpenseItem = ({name, value, id}) => {
  const {account, setAccount}    = useAccountContext();
  const {expenseInputRef}        = useExpensesContext();
  const {useExpenseEdit}         = useExpensesContext();
  const deleteParams             = {id, account, setAccount};
  const forExpense               = {expenseInputRef, useExpenseEdit};
  const editParams               = {...deleteParams, ...forExpense};

  const onClickExpenseItemDelete = () => doExpenseItemDelete(deleteParams);
  const onClickExpenseItemEdit   = () => doExpenseItemEdit(editParams);

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

