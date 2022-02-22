import { WithdrawInput }  from "../account/WithdrawInput";
import { DepositInput }   from "../account/DepositInput";
import { AccountContext } from "../context/AccountContext"
import { useAccount }     from "../states/AccountState";

export const AccountPage = () => {
  const [account, setAccount] = useAccount();

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

