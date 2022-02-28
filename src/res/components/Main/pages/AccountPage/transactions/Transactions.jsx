import { TransactionInput } from "./TransactionInput";
import { PropTypes }        from "res/proptypes/proptypes";

export const Transactions = ({WITHDRAW, DEPOSIT}) => {
  return(
    <section className="">
      <h3>Transaction</h3>
      <TransactionInput transaction={DEPOSIT}/>
      <TransactionInput transaction={WITHDRAW}/>
    </section>
  );
};

const {TransactionProptypes} = PropTypes;
Transactions.propTypes       = {...TransactionProptypes};

