
import Proptypes from "prop-types";
import "../styles/Main.scss";

const MarketingTag = () =>
    <p>
        The Bank of the <span id="Many">Many</span>
        is the back for your <span id="Mony">Money</span>
    </p>

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
    )
}

const WelcomeImage = () => <img src="" alt="image1" />;

export const Main = () => {
    return (
        <main className="main-page">
            <WelcomePage />
            <WelcomeImage />
        </main>
    );
};

