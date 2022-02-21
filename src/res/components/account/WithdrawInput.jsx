import { useBalanceContext, BalanceContext } from "../states/BalanceStates.jsx"
import { useRef } from "react";
import { onClickTransaction } from "./transaction";
import { Input } from "../global/components";

export const WithdrawInput = () => {
  const setBalance = useBalanceContext(BalanceContext);
  const withdrawRef = useRef(null);
  const onClickWithdraw = () => onClickTransaction(withdrawRef, setBalance);

  return (
    <div>
      <label htmlFor="withdraw">Withdraw: </label>
      <Input name={"withdraw"} ref={withdrawRef}/>
      <button onClick={onClickWithdraw}>withdraw</button>
    </div>
  );
};

