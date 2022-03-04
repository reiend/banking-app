import Proptype                      from "prop-types";
import { AccountOption, ButtonType } from "res/global/constants";
import { ExpenseButton }             from "./ExpenseButton";   
import { chakra }                    from "@chakra-ui/react";

import { useAccountContext }  from "res/context/AccountContext";  
import { useExpensesContext } from "res/context/ExpensesContext";

export const ExpenseItem = ({name, value, id}) => {
  const {ExpensesOption}                    = AccountOption;
  const {EDIT_EXPENSE, PAY_EXPENSE}         = ExpensesOption;
  const {SET_ID}                            = ExpensesOption;
  const {ExpenseButtonType}                 = ButtonType;
  const {PAY, EDIT, DELETE}                 = ExpenseButtonType;
  const {account, setAccount}               = useAccountContext();
  const {expenseInputRef, expenseItemRef}   = useExpensesContext();
  const {useExpenseItem}                    = useExpensesContext();

  const {setExpenseItem} = useExpenseItem; 

  const doExpenseItemPay = () => {
    const expense        = account.expenses[id];
    const [expenseValue] = Object.values(expense);
    
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
    
    setExpenseItem({type: SET_ID, id});
    setExpenseItem({type: EDIT_EXPENSE});

    expenseNameRef.current.focus();
  };

  const doExpenseItemDelete = () => {
    const {ExpensesOption}     = AccountOption;
    const {DELETE_EXPENSE}     = ExpensesOption;

    const expense        = account.expenses[id];
    const [expenseValue] = Object.values(expense);
    
    // process deleting expense
    setAccount({type: DELETE_EXPENSE, id, expenseValue})
  };

  const onClickExpenseItemDelete = () => doExpenseItemDelete();
  const onClickExpenseItemEdit   = () => doExpenseItemEdit();
  const onClickExpenseItemPay    = () => doExpenseItemPay();

  const pay    = {
    title: PAY, 
    onClick: 
    onClickExpenseItemPay, 
    colorScheme: "primary",
    variant: "solid",
  };
  const edit   = {
    title: EDIT, 
    onClick: 
    onClickExpenseItemEdit, 
    colorScheme: "secondary",
    variant: "ghost",
  };
  const remove = {
    title: DELETE, 
    onClick: onClickExpenseItemDelete, 
    colorScheme: "red",
    variant: "ghost"
  }

  return( 
    <chakra.li 
      id={id} ref={expenseItemRef}
      display="grid"
      gridTemplateColumns="repeat(5, 1fr)"      
      w="100%"
      m="1rem 0"
      >
      <span>{name}</span>
      <span>${value}</span>
      <ExpenseButton {...pay}/>
      <ExpenseButton {...edit}/>
      <ExpenseButton {...remove}/>
    </chakra.li>
  );
};



ExpenseItem.propTypes = {
  name:  Proptype.string,
  value: Proptype.string,
  id:    Proptype.number,
};
