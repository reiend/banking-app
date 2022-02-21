import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import { Navbar } from "./Navbar";

export const Header = ({onClickIsLoginPage}) => {
  const onClickIsLoginPageProp = () => onClickIsLoginPage();
  return(
      <header>
        <Navbar/>
        <Link to="/login" onClick={onClickIsLoginPageProp}>Login</Link>
      </header> 
  );
};

