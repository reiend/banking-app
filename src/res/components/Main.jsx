import { useContext, createContext } from "react";
import Proptypes from "prop-types";
import { AccountPage } from "./pages//AccountPage";
import "../styles/Main.scss";

const MarketingTag = () =>
    <p>
        <div>
            Bank of the <span id="Many">Many</span>
        </div>
        <div>
            Bank for your <span id="Mony">Money</span>
        </div>
    </p>;

export const Button    = ({title}) => <button>{title}</button>;
Button.propTypes       = {title: Proptypes.string};

const GetStartedButton = () => <Button title={"Get Started"} />;
const LearnMoreButton  = () => <Button title={"Learn More"} />;

const Explore = () => {
    return (
        <nav>
            <GetStartedButton />
            <LearnMoreButton />
        </nav>
    );
};

const WelcomePage = () => {
    return (
        <section>
            <MarketingTag />
            <Explore />
        </section>
    );
}

const WelcomeImage = () => <img src="" alt="image1" />;

export const Main = () => {
    return (
        <main className="main-page">
          <AccountPage />
        </main>
    );
};

