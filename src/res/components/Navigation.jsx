


const many         = <span className="bank-name">Many</span>;
const bank         = <span className="bank">Bank</span>;
export const Brand = () =>
    <div>
        <a href="/">{many}{bank}</a>
    </div>;

const Home    = () => <li>home</li>;
const About   = () => <li>about us</li>;
const Invest  = () => <li>invest</li>;
const Protect = () => <li>protect</li>;
const Learn   = () => <li>learn more</li>;
const FAQs    = () => <li><span>faq</span>s</li>;
const Contact = () => <li>contact us</li>;

const NavigationList = () => {
    return (
        <ul>
            <Home />
            <About />
            <Invest />
            <Protect />
            <Learn />
            <FAQs />
            <Contact />
        </ul>
    );
};

export const Navigation = () => {
    return (
        <nav>
            <NavigationList />
        </nav>
    );
};

