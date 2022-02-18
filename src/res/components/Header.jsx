
import Proptypes      from "prop-types";
import { Fragment }   from "react";
import { Button }     from "./Main";

const SearchBar = () =>
    <nav>
        <input type="text" />
    </nav>;

const LanguageChanger = () =>
    <div>
        <label htmlFor="language">Language</label>
        <select
            ariaLabel="language changer"
            name="language"
            id="language">
        </select>
    </div>;

export const Utility = () => {
    return (
        <Fragment>
            <SearchBar />
            <LanguageChanger />
        </Fragment>
    );
};

const LoginButton      = () => <Button title={"Login"} />;
const GetStartedButton = () => <Button title={"Get Started"} />;

const Account = () => {
    return (
        <div>
            <LoginButton />
            <GetStartedButton />
        </div>
    )
}


export const Header = (props) => {
    const {children, brand, utility} = props;
    return (
        <header>
            <div>
                { brand }
                { utility }
            </div>
            { children }
            <Account />
        </header>
    );
};

Header.propTypes = {
    children:   Proptypes.element,
    brand:      Proptypes.elementType,
    utility:    Proptypes.elementType,
};

