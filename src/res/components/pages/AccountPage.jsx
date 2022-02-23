import { AccountOption }  from "../global/constants";
import { AccountContext } from "../context/AccountContext"
import { Expenses }       from "../account/Expenses";
import { Transactions }   from "../account/Transactions";
import { useAccount }     from "../states/AccountState";

export const AccountPage = () => {
  const {TransactionOption}   = AccountOption;
  const [account, setAccount] = useAccount({});

  return (
    <section>
      <AccountContext.Provider value={{account, setAccount}}>
        <section>Balance: {account.balance}</section>
        <Transactions {...TransactionOption}/>   
        <Expenses/>     
      </AccountContext.Provider>
    </section>
  );
};
