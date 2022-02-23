import { Account }        from "../account/Account";
import { AccountOption }  from "../global/constants";
import { AccountContext } from "../context/AccountContext"
import { Expenses }       from "../expenses/Expenses";
import { Transactions }   from "../transactions/Transactions";
import { useAccount }     from "../states/AccountState";

export const AccountPage = () => {
  const {TransactionOption}   = AccountOption;
  const [account, setAccount] = useAccount({});

  return (
    <section>
      <AccountContext.Provider value={{account, setAccount}}>
        <Account/>
        <Transactions {...TransactionOption}/>   
        <Expenses/>     
      </AccountContext.Provider>
    </section>
  );
};
