import { useBalanceContext, BalanceContext } from "../states/BalanceStates.jsx"
import { useRef } from "react";
import { onClickTransaction } from "./transaction";
import { Input } from "../global/components";

export const DepositInput = () => {
  const setBalance= useBalanceContext(BalanceContext);
  const depositRef = useRef(null);
  const onClickDeposit = () => onClickTransaction(depositRef, setBalance);

  return (
    <div>
      <label htmlFor="deposit">Deposit: </label>
      <Input name={"deposit"} ref={depositRef}/>
      <button onClick={onClickDeposit}>deposit</button>
    </div>
  );
};

