import { useRef }             from "react";
import { useAccountContext }  from "../states/AccountState";
import { onClickTransaction } from "./transaction";
import { Input }              from "../global/components";

export const WithdrawInput = () => {
  const setAccount      = useAccountContext();
  const withdrawRef     = useRef(null);
  const onClickWithdraw = () => onClickTransaction(withdrawRef, setAccount);

  return (
    <div>
      <label htmlFor="withdraw">Withdraw: </label>
      <Input name={"withdraw"} ref={withdrawRef}/>
      <button onClick={onClickWithdraw}>withdraw</button>
    </div>
  );
};

