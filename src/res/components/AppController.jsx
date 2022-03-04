import { Main }                 from "res/components/Main/Main";
import { Header }               from "res/components/Header/Header";
import { AppControllerContext } from "res/context/AppControllerContext";
import { Box }                  from "@chakra-ui/react";

import { useState } from "react";

export const AppController = () => {
  const [isShow, setIsShow] = useState(false);

  return(
    <AppControllerContext.Provider value={{isShow, setIsShow}}>
        {/* overlay if if navbar list was shown */}
        <Box
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

