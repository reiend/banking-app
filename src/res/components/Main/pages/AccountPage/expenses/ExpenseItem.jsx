import { PropTypes }    from "res/proptypes/proptypes";
import { AccountOption } from "res/global/constants";

import { useAccountContext }  from "res/context/AccountContext";  
import { useExpensesContext } from "res/context/ExpensesContext";

export const ExpenseItem = ({name, value, id}) => {
  const {ExpensesOption, EDIT_ACCOUNT}      = AccountOption;
  const {EDIT_EXPENSE, PAY_EXPENSE}         = ExpensesOption;
  const {SET_ID}                            = ExpensesOption;
  const {account, setAccount}               = useAccountContext();
  const {expenseInputRef, expenseItemRef}   = useExpensesContext();
  const {useExpenseItem}                    = useExpensesContext();

  const {setExpenseItem} = useExpenseItem; 

  const doExpenseItemPay = () => {
    const expense        = account.expenses[id];
    const [expenseValue] = Object.values(expense);
    
    setAccount({type: EDIT_ACCOUNT});
    setAccount({type: PAY_EXPENSE, id, expenseValue});
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

  const doExpenseItemDelete = () => {
    const {ExpensesOption}     = AccountOption;
    const {DELETE_EXPENSE}     = ExpensesOption;
    
    // process deleting expense
    setAccount({type: DELETE_EXPENSE, id})
  };

  const onClickExpenseItemDelete = () => doExpenseItemDelete();
  const onClickExpenseItemEdit   = () => doExpenseItemEdit();
  const onClickExpenseItemPay    = () => doExpenseItemPay();

  return( 
    <li id={id} ref={expenseItemRef}>
      <span>{name}</span>-<span>{value}</span>
      <button onClick={onClickExpenseItemPay}>pay</button>
      <button onClick={onClickExpenseItemEdit}>edit</button>
      <button onClick={onClickExpenseItemDelete}>X</button>
    </li>
  );
};

const {ExpenseItemProptypes} = PropTypes;
ExpenseItem.propTypes        = {...ExpenseItemProptypes}

