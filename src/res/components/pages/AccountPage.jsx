import { AccountOption }     from "../global/constants";
import { AccountContext }    from "../context/AccountContext"
import { Expenses }          from "../account/Expenses";
import { Transactions }      from "../account/Transactions";
import { useAccount }        from "../states/AccountState";

export const AccountPage = () => {
  const [account, setAccount] = useAccount({});
  const {TransactionOption}   = AccountOption;

  return (
    <section>
      <AccountContext.Provider value={setAccount}>
        <div>Balance: {account.balance}</div>
        <Transactions {...TransactionOption}/>   
        <Expenses/>     
      </AccountContext.Provider>
    </section>
  );
};

