import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import { useState } from "react";
import { Header } from "./Header";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage.jsx";

import "../../../App.css";

const Main = () => {
  return (
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/login" element={<LoginPage />}/>
        </Routes>
  );
};

export const Bank = () => {
  const [isLoginPage, setIsLoginPage] = useState(false);
  console.log(isLoginPage);
  const onClickIsLoginPage = () =>  setIsLoginPage(true);
  return(
    <Router>
      {!isLoginPage && <Header onClickIsLoginPage={onClickIsLoginPage}/>}
      {isLoginPage && <Main/>}
    </Router>
  );
};

