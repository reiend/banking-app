import { TransactionInput }  from "../account/TransactionInput";
import { ExpenseInput }      from "../account//ExpenseInput";
import { AccountOption }     from "../global/constants";
import { AccountContext }    from "../context/AccountContext"
import { useAccount }        from "../states/AccountState";

export const AccountPage = () => {
  const [account, setAccount] = useAccount({});
  const {TransactionOption}   = AccountOption;
  const {WITHDRAW, DEPOSIT}   = TransactionOption;

  return (
    <section>
      <AccountContext.Provider value={setAccount}>
        <div>Balance: {account.balance}</div>
        <div>
          <TransactionInput transaction={WITHDRAW}/>
          <TransactionInput transaction={DEPOSIT}/>
        </div>
        <div>
            <ExpenseInput/>  
        </div>  
      </AccountContext.Provider>
    </section>
  );
};

