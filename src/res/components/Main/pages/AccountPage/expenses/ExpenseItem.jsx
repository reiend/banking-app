import { PropTypes }    from "res/proptypes/proptypes";
import { AccountOption } from "res/global/constants";

import { useAccountContext }  from "res/context/AccountContext";  
import { useExpensesContext } from "res/context/ExpensesContext";

export const ExpenseItem = ({name, value, id}) => {
  const {ExpensesOption}                    = AccountOption;
  const {EDIT_EXPENSE, SET_ID}              = ExpensesOption;
  const {account, setAccount: setExpenses}  = useAccountContext();
  const {expenseInputRef, expenseItemRef}   = useExpensesContext();
  const {useExpenseItem}                    = useExpensesContext();

  const {setExpenseItem} = useExpenseItem; 

  const doExpenseItemDelete = () => {
    const {ExpensesOption}     = AccountOption;
    const {DELETE_EXPENSE}     = ExpensesOption;
    
    // process deleting expense
    setExpenses({type: DELETE_EXPENSE, id})
  };

  const doExpenseItemEdit = () => {
    const {expenseNameRef, expenseValueRef} = expenseInputRef;
    const expenseNameObject                 = expenseNameRef.current;
    const expenseValueObject                = expenseValueRef.current;
    const expense                           = account.expenses[id];
    const [expenseName]                     = Object.keys(expense);
    const [expenseValue]                    = Object.values(expense);
    expenseNameObject.value                 = expenseName;
    expenseValueObject.value                = expenseValue;
    
    setExpenseItem({type: EDIT_EXPENSE});
    setExpenseItem({type: SET_ID, id});

    expenseNameRef.current.focus();
  };

  const onClickExpenseItemDelete = () => doExpenseItemDelete();
  const onClickExpenseItemEdit   = () => doExpenseItemEdit();

  return( 
    <li id={id} ref={expenseItemRef}>
      <span>{name}</span>-<span>{value}</span>
      <button onClick={onClickExpenseItemDelete}>X</button>
      <button onClick={onClickExpenseItemEdit}>edit</button>
    </li>
  );
};

const {ExpenseItemProptypes} = PropTypes;
ExpenseItem.propTypes        = {...ExpenseItemProptypes}

