import { useState } from "react";
import { AccountPage } from "./AccountPage";
import { LandingPage } from "./LandingPage";
import { LoginPage } from "./LoginPage";
import { RegisterPage } from "./RegisterPage";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

const Nav = () => {
  return(
    <ul className="navbar">
      <li className="navbar-list">
        <Link to="/">
          Home
        </Link> 
      </li>
      <li className="navbar-list">
        <Link to="/account">
          account
        </Link> 
      </li>
      <li className="navbar-list">
        <Link to="/login">
          login
        </Link> 
      </li>
      <li className="navbar-list">
        <Link to="/register">
          register
        </Link> 
      </li>
    </ul>
  )
}

export default function TestBank() {
  const [count, setCount] = useState(0);
  const onClickCount = () => setCount(count => count + 1);
  return(
      <Router>
        <div>
          <Nav/>
          <Routes>
            <Route path="/" element={ <LandingPage onClickCount={onClickCount} count={count}/>} />
            <Route path="/account" element={ <AccountPage/>} />
            <Route path="/register" element={ <RegisterPage/>} />
            <Route path="/login" element={ <LoginPage/>} />
          </Routes>
        </div> 
      </Router>
  )
}

