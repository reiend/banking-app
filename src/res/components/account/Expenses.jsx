import { ExpenseInput }        from "../inputs/ExpenseInput";
import { ExpensesList }        from "../coreutils/ExpensesUtils";

export const Expenses = () => {
  return(
    <section>
      <ExpensesList />
      <ExpenseInput/>  
    </section>  
  );
};

