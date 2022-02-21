import { WithdrawInput }               from "../account/WithdrawInput";
import { DepositInput }                from "../account/DepositInput";
import { AccountContext, useAccount, } from "../states/AccountState";

const initialAccount = () => ({
  balance: 1000,
});

export const AccountPage = () => {
  const [account, setAccount] = useAccount({}, initialAccount);
  return (
    <section>
      <AccountContext.Provider value={setAccount}>
        <div>
          <div>Balance: {account.balance}</div>
            <WithdrawInput/>
            <DepositInput/>
        </div>
      </AccountContext.Provider>
    </section>
  );
};

