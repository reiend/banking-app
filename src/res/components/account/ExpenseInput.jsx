import { ProcessAccount }    from "./processAccount";
import { Input }             from "../global/components";
import { ExpenseInputName }  from "../global/constants";
import { useAccountContext } from "../context/AccountContext";

export const ExpenseInput = () => {
  const {EXPENSE_NAME, EXPENSE_VALUE} = ExpenseInputName;
  const { processExpense }            = ProcessAccount;
  const setAccount                    = useAccountContext();

  const onSubmitAddExpense = (event) => processExpense(event, setAccount);

  return(
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
  )
};

