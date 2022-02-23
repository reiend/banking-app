import { TransactionInput } from "./TransactionInput";
import { PropTypes }        from "../../../proptypes/proptypes";

export const Transactions = ({WITHDRAW, DEPOSIT}) => {
  return(
    <section>
      <h3>Transaction</h3>
      <TransactionInput transaction={DEPOSIT}/>
      <TransactionInput transaction={WITHDRAW}/>
    </section>
  );
};

const {TransactionProptypes} = PropTypes;
Transactions.propTypes       = {...TransactionProptypes};

