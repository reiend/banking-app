import { TransactionInput } from "../inputs/TransactionInput";
import { PropTypes }        from "../proptypes/proptypes";

export const Transactions = ({WITHDRAW, DEPOSIT}) => {
  return(
    <div>
      <TransactionInput transaction={DEPOSIT}/>
      <TransactionInput transaction={WITHDRAW}/>
    </div>
  );
};

const {TransactionProptypes} = PropTypes;
Transactions.propTypes = {...TransactionProptypes};

