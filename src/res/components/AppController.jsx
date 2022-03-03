import { Main }                 from "res/components/Main/Main";
import { Header }               from "res/components/Header/Header";
import { AppControllerContext } from "res/context/AppControllerContext";
import { Wrap }                 from "@chakra-ui/react";

import { useState } from "react";

export const AppController = () => {
  const [isShow, setIsShow] = useState(false);
  
  
  return(
    <AppControllerContext.Provider value={{isShow, setIsShow}}>
        <Wrap
          pos="absolute"
          bg={{base: `${!isShow? "#ffffff00" : "#ffffffee"}`, md: "#ffffff00"}}
          transition="background-color 200ms ease-in"
          w="100vw"
          h="100vh"
        />
        <Header/>
        <Main/>
    </AppControllerContext.Provider>
  );
};

