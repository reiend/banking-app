import { WithdrawInput } from "../account/WithdrawInput";
import { DepositInput }  from "../account/DepositInput";
import { 
  AccountContext, 
  accountReducer, 
  useAccount,
} from "../states/AccountState";

const initialAccount = () => ({
  balance: 5000,
});

export const AccountPage = () => {
  const [accountState, setAccount] = useAccount(
    accountReducer, 
    {}, 
    initialAccount
  );
  return (
    <section>
      <AccountContext.Provider value={setAccount}>
        <div>
          <div>Balance: {accountState.balance}</div>
            <WithdrawInput/>
            <DepositInput/>
        </div>
      </AccountContext.Provider>
    </section>
  );
};

