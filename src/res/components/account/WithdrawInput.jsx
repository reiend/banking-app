import { useBalanceContext, BalanceContext } from "../states/BalanceStates.jsx"
import { useRef } from "react";
import { onClickTransaction } from "../global/utils"

export const WithdrawInput = () => {
  const setBalance = useBalanceContext(BalanceContext);
  const withdrawRef = useRef(null);
  const onClickWithdraw = () => onClickTransaction(withdrawRef, setBalance);

  return (
    <div>
      <label htmlFor="withdraw">Withdraw: </label>
      <input type="text" id="withdraw"  name="withdraw" ref={withdrawRef}/>
      <button onClick={onClickWithdraw}>withdraw</button>
    </div>
  );
};

