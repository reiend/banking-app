import { ExpenseInput } from "./ExpenseInput";
import { ExpensesList } from "./ExpensesList";

export const Expenses = () => {
  return(
    <section>
      <h3>Expenses</h3>
      <ExpensesList />
      <ExpenseInput/>  
    </section>  
  );
};

