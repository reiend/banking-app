import { WithdrawInput } from "../account/WithdrawInput";
import { DepositInput } from "../account/DepositInput";

import { useBalance, BalanceContext, } from "../states/BalanceStates"

export const AccountPage = () => {
  const [balance, setBalance] = useBalance(5000);
  return (
    <div>
      <div>
        <div>Balance: {balance}</div>
        <BalanceContext.Provider value={setBalance}>
          <WithdrawInput/>
          <DepositInput/>
        </BalanceContext.Provider>
      </div>
    </div>
  );
};
