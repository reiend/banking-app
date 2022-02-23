import { Input }                     from "res/global/components";
import { ExpenseInputName }          from "res/global/constants";
import { CurrencyUtils }             from "res/global/utils";
import { AccountOption, ResetValue } from "res/global/constants";
import { useAccountContext }         from "res/context/AccountContext";

const processExpenseAdd = (event, setExpenses) => {
  event.preventDefault();
  const {ExpensesOption}                     = AccountOption;
  const {ADD_EXPENSE}                        = ExpensesOption;
  const {RESET_STRING_VALUE}                 = ResetValue;
  const {isInvalidCurrency, currencyFormat}  = CurrencyUtils;

  const expenseNameObject  = event.target.expenseName;
  const expenseValueObject = event.target.expenseValue;
  const expenseName        = expenseNameObject.value;
  const expenseValue       = currencyFormat(expenseValueObject.value);

  if(isInvalidCurrency(expenseValue)) {
    expenseValueObject.value = RESET_STRING_VALUE;
  }

  const expense = {[expenseName]: expenseValue};

  // process adding expense
  setExpenses({type: ADD_EXPENSE, expense, expenseValue});
  
  // Reset form
  expenseNameObject.value  = RESET_STRING_VALUE;
  expenseValueObject.value = RESET_STRING_VALUE;
};

export const ExpenseInput = () => {
  const {EXPENSE_NAME, EXPENSE_VALUE} = ExpenseInputName;
  const {setAccount}                  = useAccountContext();

  const onSubmitAddExpense = (event) => processExpenseAdd(event, setAccount);

  return(
    <div>
      <h4>List new Expense</h4>
      <form onSubmit={onSubmitAddExpense}>
        <div>
          <label htmlFor={EXPENSE_NAME}>Expense: </label>
          <Input name={EXPENSE_NAME}/>   
        </div>
        <div>
          <label htmlFor={EXPENSE_VALUE}>Value: </label>
          <Input name={EXPENSE_VALUE}/>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

