import { Main }    from "res/components/Main/Main";
import { Header }  from "res/components/Header/Header";
import { Container, chakra }  from "@chakra-ui/react";


function App() {
  return (
    <Container maxWidth="container.xl">
      <Header/>
      <Main/>
    </Container>
  );
}

export default App;

