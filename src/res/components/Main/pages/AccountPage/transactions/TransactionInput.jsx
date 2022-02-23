import { PropTypes }         from "../../../../../proptypes/proptypes"
import { Input }             from "../../../../../global/components";
import { CurrencyUtils }     from "../../../../../global/utils";
import { ResetValue }        from "../../../../../global/constants";
import { useAccountContext } from "../../../../../context/AccountContext";
import { formatDisplay }     from "../../../../../global/utils";
import { useRef }            from "react";

const processTransaction = (inputRef, setTransaction) => {
  const {RESET_STRING_VALUE}                = ResetValue;
  const {currencyFormat, isInvalidCurrency} = CurrencyUtils;

  const TRANSACTION = inputRef.current.name.toUpperCase();
  const inputValue  = currencyFormat(inputRef.current.value);

  if(isInvalidCurrency(inputValue)) {
    inputRef.current.value = RESET_STRING_VALUE;
  }

  // process transaction
  setTransaction({type: TRANSACTION, inputValue});

  // Reset input
  inputRef.current.value = RESET_STRING_VALUE;
};

export const TransactionInput = ({transaction}) => {
  const {setAccount}         = useAccountContext();
  const inputRef             = useRef(null);
  const TRANSACTION_TYPE     = transaction.toLowerCase();
  const DISPLAY_TRANSACTION  = formatDisplay(TRANSACTION_TYPE);

  const onClickTransaction   = () => processTransaction(inputRef, setAccount);

  return (
    <div>
      <label htmlFor={TRANSACTION_TYPE}>{DISPLAY_TRANSACTION}: </label>
      <Input name={TRANSACTION_TYPE} ref={inputRef}/>
      <button onClick={onClickTransaction}>{TRANSACTION_TYPE}</button>
    </div>
  );
};

const {TransactionInputProptypes} = PropTypes;
TransactionInput.propTypes        = { ...TransactionInputProptypes };

