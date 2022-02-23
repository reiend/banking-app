import { useAccountContext } from "res/context/AccountContext";  

export const Account = () => {
  const {account} = useAccountContext();
  return(
    <section>
      <h2>Account</h2>
      <div>ID: {account.id}</div> 
      <div>Name: {account.firstname} {account.lastname}</div> 
      <div>Balance: {account.balance}</div>
    </section>
  );
};

