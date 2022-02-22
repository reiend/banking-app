import { TransactionInput }  from "../account/TransactionInput";
import { TransactionOption } from "../global/constants";
import { AccountContext }    from "../context/AccountContext"
import { useAccount }        from "../states/AccountState";

export const AccountPage = () => {
  const [account, setAccount] = useAccount();
  const {WITHDRAW, DEPOSIT}   = TransactionOption;

  return (
    <section>
      <AccountContext.Provider value={setAccount}>
        <div>
          <div>Balance: {account.balance}</div>
          <TransactionInput transaction={WITHDRAW}/>
          <TransactionInput transaction={DEPOSIT}/>
        </div>
      </AccountContext.Provider>
    </section>
  );
};

