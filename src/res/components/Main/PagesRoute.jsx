import { AccountPage } from "./pages/AccountPage/AccountPage";
import { AuthPage,Login } from "./pages/AuthPage/AuthPage";
import { HStack, Box, chakra } from "@chakra-ui/react";

import { 
  Routes, 
  Route, 
  Outlet,
} from "react-router-dom";


const Page = () => {
  return(
    <Outlet/>
  );
};

export const PagesRoute = () => {
  return(
      <Routes>
        <Route path="/" element={ <Page/> }>
            <Route path="account" element={ <AccountPage/> }/>
            <Route path="auth" element={ <AuthPage/> } />
            <Route path="*" element={<div/>}/>
        </Route>
      </Routes>
  );
};
