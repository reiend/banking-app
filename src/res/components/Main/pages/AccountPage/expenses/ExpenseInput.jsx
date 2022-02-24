import { Input }                                  from "res/global/components";
import { AccountOption, ExpenseInputName }        from "res/global/constants";
import { ResetValue, ButtonType, EditingChoices } from "res/global/constants";
import { CurrencyUtils }                          from "res/global/utils";

import { useAccountContext }  from "res/context/AccountContext";
import { useExpensesContext } from "res/context/ExpensesContext";

export const ExpenseInput = () => {
  const {EXPENSE_NAME, EXPENSE_VALUE} = ExpenseInputName;
  const {ADD, EDIT, CANCEL}           = ButtonType;

  const {expenseInputRef, useExpenseEdit}  = useExpensesContext();
  const {account, setAccount: setExpenses} = useAccountContext();
  const {isEditing}                        = useExpenseEdit;
  const {expenseNameRef, expenseValueRef}  = expenseInputRef;

  const doExpense = (event) => {
      const {ExpensesOption}                                 = AccountOption;
      const {ADD_EXPENSE, EDIT_EXPENSE, CANCEL_EDIT_EXPENSE} = ExpensesOption;
      const {RESET_STRING_VALUE}                             = ResetValue;
      const {NO}                                             = EditingChoices;
      const {isInvalidCurrency, currencyFormat}              = CurrencyUtils;

      const {setIsEditing}     = useExpenseEdit;
      const expenseNameObject  = expenseNameRef.current;
      const expenseValueObject = expenseValueRef.current;
      const value              = expenseValueObject.value;
      const expenseName        = expenseNameObject.value;
      const expenseValue       = currencyFormat(value);

      if(isInvalidCurrency(expenseValue)) {
        expenseValueObject.value = RESET_STRING_VALUE;
      }

      const expense           = {[expenseName]: expenseValue};
      const setExpensesParams = {expense, expenseValue};
      const DO                = event.target.name;

      // Expense operation
      const add    = {...setExpensesParams, type: ADD_EXPENSE};
      const edit   = {...setExpensesParams, type: EDIT_EXPENSE};
      const cancel = {...setExpensesParams, type: CANCEL_EDIT_EXPENSE};

      // set Expense operation
      const setAddExpense  = () => setExpenses({...add});
      const setEditExpense = () => setExpenses({...edit});   setIsEditing(NO);
      const setCancelEdit  = () => setExpenses({...cancel}); setIsEditing(NO);

      // Expense options
      switch(DO) {
        case ADD:     setAddExpense();  break;
        case EDIT:    setEditExpense(); break;
        case CANCEL:  setCancelEdit();  break;
        default:      break;
      }

      // Reset input
      expenseNameObject.value  = RESET_STRING_VALUE;
      expenseValueObject.value = RESET_STRING_VALUE;
  };

  const onClickExpenseDo  = (event) => doExpense(event);
  const doButton          = (name) => ({name, onClick: onClickExpenseDo});

  return(
    <div>
      {isEditing  || <h4>List new Expense</h4>}
      {!isEditing || <h4>Editing Expense</h4>}
      <div>
        <label htmlFor={EXPENSE_NAME}>Expense: </label>
        <Input name={EXPENSE_NAME} ref={expenseNameRef}/>   
      </div>
      <div>
        <label htmlFor={EXPENSE_VALUE}>Value: </label>
        <Input name={EXPENSE_VALUE} ref={expenseValueRef}/>
      </div>
      {isEditing  || <button {...doButton(ADD)}>{ADD}</button>}
      {!isEditing || <button {...doButton(EDIT)}>{EDIT}</button>}
      {!isEditing || <button {...doButton(CANCEL)}>{CANCEL}</button>}
    </div>
  );
};
    
