
export const LoginPage = () => {
  return(
    <form action="/" method="POST">
      <label htmlFor="username">username</label>
      <input type="text" name="username" id="username"/>
      <label htmlFor="password">password</label>
      <input type="password" name="password" id="password"/>
      <button>LoginPage</button>
    </form>
  );
};
