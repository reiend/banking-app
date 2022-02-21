import { useRef }             from "react";
import { useAccountContext }  from "../states/AccountState";
import { onClickTransaction } from "./transaction";
import { Input }              from "../global/components";

export const DepositInput = () => {
  const setAccount     = useAccountContext();
  const depositRef     = useRef(null);
  const onClickDeposit = () => onClickTransaction(depositRef, setAccount);

  return (
    <div>
      <label htmlFor="deposit">Deposit: </label>
      <Input name={"deposit"} ref={depositRef}/>
      <button onClick={onClickDeposit}>deposit</button>
    </div>
  );
};

