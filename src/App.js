import { Main }    from "res/components/Main/Main";
import { Header }  from "res/components/Header/Header";
import { chakra }  from "@chakra-ui/react";


function App() {
  return (
    <chakra.section>
      <Header/>
      <Main/>
    </chakra.section>
  );
}

export default App;

