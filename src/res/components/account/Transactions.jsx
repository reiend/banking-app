import { TransactionInput } from "../inputs/TransactionInput";
import { PropTypes }        from "../proptypes/proptypes";

export const Transactions = ({WITHDRAW, DEPOSIT}) => {
  return(
    <section>
      <TransactionInput transaction={DEPOSIT}/>
      <TransactionInput transaction={WITHDRAW}/>
    </section>
  );
};

const {TransactionProptypes} = PropTypes;
Transactions.propTypes       = {...TransactionProptypes};

