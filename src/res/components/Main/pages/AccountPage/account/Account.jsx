import { useAccountContext }  from "res/context/AccountContext";  

export const Account = () => {
  const {account} = useAccountContext();
  const { 
    id, 
    firstname, 
    lastname, 
    balance, 
    totalExpenses, 
  } = account;

  return(
    <section>
      <h2>Account</h2>
      <div>ID: {id}</div> 
      <div>Name: {firstname} {lastname}</div> 
      <div>Balance: {balance}</div>
      <div>Total Expenses: {totalExpenses}</div>
    </section>
  );
};

