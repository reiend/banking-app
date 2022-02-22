import { useRef }             from "react";
import { useAccountContext }  from "../context/AccountContext";
import { processTransaction } from "./transaction";
import { Input }              from "../global/components";

export const DepositInput = () => {
  const setAccount     = useAccountContext();
  const depositRef     = useRef(null);
  const onClickDeposit = () => processTransaction(depositRef, setAccount);

  return (
    <div>
      <label htmlFor="deposit">Deposit: </label>
      <Input name={"deposit"} ref={depositRef}/>
      <button onClick={onClickDeposit}>deposit</button>
    </div>
  );
};

