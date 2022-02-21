import { useBalanceContext, BalanceContext } from "../states/BalanceStates.jsx"
import { useRef } from "react";
import { onClickTransaction } from "../global/utils"

export const DepositInput = () => {
  const setBalance= useBalanceContext(BalanceContext);
  const depositRef = useRef(null);
  const onClickDeposit = () => onClickTransaction(depositRef, setBalance);

  return (
    <div>
      <label htmlFor="deposit">Deposit: </label>
      <input type="text" id="deposit"  name="deposit" ref={depositRef}/>
      <button onClick={onClickDeposit}>deposit</button>
    </div>
  );
};

