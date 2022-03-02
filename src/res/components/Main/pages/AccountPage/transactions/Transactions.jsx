import Proptype             from "prop-types";
import { TransactionInput } from "./TransactionInput";

export const Transactions = ({WITHDRAW, DEPOSIT}) => {
  return(
    <section className="">
      <h3>Transaction</h3>
      <TransactionInput transaction={DEPOSIT}/>
      <TransactionInput transaction={WITHDRAW}/>
    </section>
  );
};

Transaction.propTypes = {
  WITHDRAW: Proptype.string,
  DEPOSIT:  Proptype.string,
};
