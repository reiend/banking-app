
import { Fragment }            from "react";
import { Main }                from "./res/components/Main.jsx";
import { Header, Utility }     from "./res/components/Header.jsx";
import { Navigation, Brand }   from "./res/components/Navigation.jsx";

function App() {
  return (
      <Fragment>
          <section className="section-one">
              <Header
                  brand={<Brand />}
                  utility={<Utility />}
              >
                  <Navigation />
              </Header>
              <Main />
          </section>
      </Fragment>
  );
}

export default App;
