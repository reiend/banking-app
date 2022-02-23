import { ExpenseInput }        from "../inputs/ExpenseInput";
import { ExpensesList }        from "../coreutils/ExpensesUtils";

export const Expenses = () => {
  return(
    <section>
      <h3>Expenses</h3>
      <ExpensesList />
      <ExpenseInput/>  
    </section>  
  );
};

