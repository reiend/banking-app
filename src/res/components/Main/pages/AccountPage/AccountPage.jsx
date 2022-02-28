import { Account }        from "./account/Account";
import { Expenses }       from "./expenses/Expenses";
import { Transactions }   from "./transactions/Transactions";
import { AccountOption }  from "res/global/constants";
import { AccountContext } from "res/context/AccountContext"

import { useAccount } from "res/states/AccountState";

export const AccountPage = () => {
  const {TransactionOption}   = AccountOption;
  const [account, setAccount] = useAccount({});

  return (
    <main className="">
      <AccountContext.Provider value={{account, setAccount}}>
        <Account/>
        <Transactions {...TransactionOption}/>   
        <Expenses/>     
      </AccountContext.Provider>
    </main>
  );
};
