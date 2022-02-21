
import React,
{
    Component,
    Fragment,
    StrictMode,
    useState,
    useEffect,
    useContext,
    useReducer,
    useRef
} from "react";
import PropTypes from 'prop-types';

const TestMain = (props) => <h1>Hello, {props.name || 'Stranger'}</h1>;

const formatDate = (date) => date.toLocaleTimeString();

const Avatar = (props) =>
    <img
        src={props.user.avatarUrl}
        alt={props.user.name}
    />;

const UserInfo = (props) =>
    <div>
        <Avatar user={props.user} />
        <div className="UserInfo-name">{props.user.name}</div>
    </div>;

function CommentInfo(props) {
    const {date, text} = props.comment;
    return (
        <div>
            <div className="Comment-text">
                {text}
            </div>

            <div className="Comment-date">
                {formatDate(date)}
            </div>
        </div>
    )
}

function Comment(props) {
    const {author, date, text}  = props;
    const commentInfo           = {date, text};
    return (
        <div className="Comment">
            <h2>Props</h2>
            <UserInfo user={author}/>
            <CommentInfo comment={commentInfo}/>
        </div>
    )
}


const commentInfo = {
    author: {
        avatarUrl: "https://s4.anilist.co/file/anilistcdn/staff/large/n139712-3OBdRT3ezViU.png",
        name: "Nana Mori",
    },
    date: new Date(),
    text: "Hajimemashite",

}

const Time = (props) => <p>It is {props.currentTime.toLocaleTimeString()}</p>

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
        }
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            time: new Date(),
        });

    }

    render() {
        const {time} = this.state;

        return (
            <div>
                <h2>States</h2>
                <div>
                    <h3>Realtime Clock</h3>
                    <Time currentTime={time}/>
                </div>
            </div>
        )
    }
}
class HandlingEvents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            isAlive: true,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("Logging in");
    }
    handleClick(firstParam, secondParam, thirdParam) {
        this.setState((previousState) => ({
            isToggleOn: !previousState.isToggleOn,
        }));
    }

    handleClickNew = () => {
        this.setState((previousState) => ({
            isToggleOn: !previousState.isToggleOn,
        }));
    }

    handleThisAlive(firstParam, secondParam) {
        console.log(firstParam);
        console.log(secondParam);
        this.setState((prevState) => (
            {isAlive: !prevState.isAlive}
        ));
    }

    render() {
        const {
            handleSubmit,
            handleClick,
            handleClickNew,
            handleThisAlive,
        } = this;

        const {isToggleOn, isAlive} = this.state;
        return (
            <section>
                <h2>Handling Events</h2>
                <form action="" onSubmit={handleSubmit}>
                    <button type="submit">Loggin in</button>
                </form>
                <div>
                    <button onClick={this.handleClick.bind(this, "test", "gg")}>
                        {isToggleOn? "ON" : "OFF"}
                    </button>

                </div>
                <div>
                    danger don't use
                    creating new callback everytime it renders
                    <br/>
                    <button onClick={(e) => this
                        .handleThisAlive("this is a test", "Test")}>
                        {isAlive? "alive" : "not alive"}
                    </button>
                </div>
            </section>
        )
    }
}

const UserGreeting  = () => <h4>Welcome back</h4>;
const GuessGreeting = () => <h4>Please, sign in</h4>;
const LoginButton   = (props) => <button onClick={props.onClick}>Log in</button>;
const LogoutButton  = (props) => <button onClick={props.onClick}>Log out</button>;

const Greeting = (props) => {
    const {isLoggin} = props;
    if (isLoggin) return <UserGreeting />;
    return <GuessGreeting />;
}



class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggin: false,
        };
    }

    handleLoginClick  = () => this.setState({isLoggin: true});
    handleLogoutClick = () => this.setState({isLoggin: false});

    render() {
        const {handleLoginClick, handleLogoutClick} = this;
        const {isLoggin} = this.state;
        let button       = isLoggin
            ? <LogoutButton onClick={handleLogoutClick} />
            : <LoginButton onClick={handleLoginClick} />;

        return (
            <section>
                <Greeting isLoggin={isLoggin} />
                {button}
            </section>
        )
    }
}


const Conditionals = () => {
    return (
        <div>
            <h2>Condional Rendering</h2>
            <Greeting isLoggin={false}/>
            <LoginControl />
        </div>
    )
}

const MailBox = (props) => {
    const {unreadMessage} = props;
    let count             = 5;

    if (!props) return null;
    if (!count) return null;

    return (
        <div>
            <h4>Hello</h4>
            {
                unreadMessage.length > 0 &&
                <h4>you have {unreadMessage.length} unread messages.</h4>

            }
            {count && <h4>Messages {count}</h4>}
        </div>
    )
}


const message = ["oha"];


const WarningBanner = (props) => {
    if (!props.warn) return null;
    return (
        <div className="Warning">
            Warning!
        </div>
    )
};

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true}
    }

    handleToggleClick = () =>
        this.setState((state) =>
            ({showWarning: !state.showWarning}))

    render() {
        const {showWarning}       = this.state;
        const {handleToggleClick} = this;
        return (
            <div>
                <WarningBanner warn={showWarning}/>
                <button onClick={handleToggleClick}>
                {showWarning? "Hide" : "Show"}
                </button>
            </div>
        )
    }
}

const numbers = [1, 2, 3, 4, 5];

const ListItem = (props) => <li>{props.value}</li>

const NumberList = (props) => {

    const {numbers} = props;

    if(!numbers) return null;

    const listItems = numbers.map((number) =>
        <ListItem key={`${number}`} value={number}/>)

    return (
        <div>
            <h2>Keys</h2>
            <ul>
                {listItems}
            </ul>
        </div>
    )
};


const Blog = (props) => {
    const {posts} = props;
    const sideBar = (
        <ul>
            {
                posts.map((post) =>
                    <li key={post.id}>{post.title}</li>
                )
            }
        </ul>
    )

    const content = posts.map((post) =>
        <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
        </div>
    )


    return (
        <div>
            {sideBar}
            <hr />
            {content}
        </div>
    )
}

const posts = [
    {id: 1, title: "Hello World", content: "Welcome to learning react"},
    {id: 2, title: "Hi World", content: "Welcome"},

]



class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange = (event) => this.setState({value: event.target.value});

    handleSubmit(event) {
        const {value} = this.state;
        console.log(value);
        event.preventDefault();
        this.setState({value: ""});
    }

    render() {
        const {value}                      = this.state;
        const {handleSubmit, handleChange} = this;
        return (
            <form action="" onSubmit={handleSubmit}>
                <p>{value}</p>
                <label htmlFor="name">
                    Name:
                    <input
                        type="text"
                        value={value}
                        id="name"
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">submit</button>
            </form>
        )
    }
}


class EssayForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            essay: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({essay: event.target.value});
    }
    handleSubmit(event) {
        const {essay} = this.state;
        console.log(essay);
        event.preventDefault();
        event.target.value = "";
    }

    render() {
        const {essay}                      = this.state;
        const {handleSubmit, handleChange} = this;
        return (
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="essay">
                    Essay:
                    <textarea
                        name="essay"
                        id="essay"
                        cols="30"
                        rows="10"
                        placeholder="What's on your mind?"
                        value={essay}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Post</button>
            </form>
        )
    }
}

class FruitForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "coconut",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        const {value} = this.state;
        console.log(value);
        event.preventDefault();
        event.target.value = "";
    }

    render() {
        const {value} = this.state;
        const {handleSubmit, handleChange} = this;
        return (
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="fruit">
                    Order fruit:
                    <select
                        value={value}
                        name="fruit"
                        id="fruit"
                        onChange={handleChange}
                    >
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">lime</option>
                        <option value="coconut">coconut</option>
                        <option value="mango">mango</option>
                    </select>
                </label>
                <button type="submit">order</button>
            </form>
        )
    }
}

class FileForm extends Component {

    render() {
        return (
            <form action="">
                <label htmlFor="file">
                    Upload file:
                    <input type="file"/>
                </label>
            </form>
        )
    }
}

class ReservationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing:       true,
            numberOfGuess: 5,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox"
            ? target.checked
            : target.value;

        const name = target.name;


        this.setState({[name]: value});
    }

    render() {
        const {isGoing, numberOfGuess}          = this.state;
        const {handleInputChange, handleSubmit} = this;
        return (
            <form action="" onSubmit={handleSubmit}>

                <div>
                    {isGoing
                        ? <i>True - {`${isGoing}`}</i>
                        : <b>False - {`${isGoing}`}</b>
                    }
                </div>

                <label htmlFor="isGoing">
                    is going:
                    <input
                        type="checkbox"
                        name="isGoing"
                        checked={isGoing}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label htmlFor="numberOfGuess">
                    Number of Guess:
                    <input
                        type="text"
                        name="numberOfGuess"
                        value={numberOfGuess}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

const FormControl = () => {
    return (
        <div>
            <h2>Forms</h2>
            <NameForm />
            <EssayForm />
            <FruitForm />
            <FileForm />
            <ReservationForm />
        </div>
    )
}

// const boil           = <p>The water would boil</p>;
// const notBoil        = <p>The water would not boil</p>;
// const BoilingVerdict = ({celcius})  => celcius >= 100? boil : notBoil;
// const toCelcius      = (fahrenheit) => (fahrenheit - 32) * 5 / 9;
// const toFahrenheit   = (celcius)    => (celcius * 9 / 5) + 32;

// const tryToConvert = (temperature, convert) => {
//     const input = parseFloat(temperature);
//     if (Number.isNaN(input)) return "";
//     const output = convert(input);
//     const rounded = Math.round(output * 1000) / 1000;
//     return `${rounded}`;
// }

// const scaleNames = {
//     C: "Celcius",
//     F: "Fahrenheit",
// };

// class TemperatureInput extends Component {

//     handleChange = (event) =>
//         this.props.onTemperatureChange(event.target.value);

//     render() {
//         const {temperature}  = this.props;
//         const {scale}        = this.props;
//         const {handleChange} = this;

//         return (
//             <fieldset>
//                 <legend>
//                     Enter Temperature in {scaleNames[scale]}
//                 </legend>
//                 <input
//                     type="text"
//                     value={temperature}
//                     onChange={handleChange}
//                 />
//             </fieldset>
//         )
//     }
// }

// class Calculator extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {scale: "C", temperature: ""}
//     }
//     handleCelciusChange = (temperature) =>
//         this.setState({scale: "C", temperature});

//     handleFahrenheitChange = (temperature) =>
//         this.setState({scale: "F", temperature});

//     render() {

//         const {scale, temperature} = this.state;
//         const {handleCelciusChange, handleFahrenheitChange} = this;

//         const celcius = scale === "F"
//             ? tryToConvert(temperature, toCelcius)
//             : temperature;

//         const fahrenheit = scale === "C"
//             ? tryToConvert(temperature, toFahrenheit)
//             : temperature;

//         return (
//             <div>
//                 <TemperatureInput
//                     scale="C"
//                     temperature={celcius}
//                     onTemperatureChange={handleCelciusChange}
//                 />
//                 <TemperatureInput
//                     scale="F"
//                     temperature={fahrenheit}
//                     onTemperatureChange={handleFahrenheitChange}
//                 />
//                 <BoilingVerdict celcius={parseFloat(celcius)}/>
//             </div>
//         )
//     }
// }

const boil           = <p>The water would boil</p>;
const notBoil        = <p>The water would not boil</p>;
const BoilingVerdict = ({celcius})   => celcius >= 100 ? boil : notBoil;
const toCelcius      = (fahrenheit)  => (fahrenheit - 32) * 5 / 9;
const toFahrenheit   = (celcius)     => (celcius * 9 / 5) + 32;
const tryToConvert   = (temperature, convert) => {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) return "";
    const output = convert(temperature);
    const rounded = Math.round(output * 1000) / 1000;
    return `${rounded}`;
};


const scaleNames = {C: "Celcius", F: "Fahrenheit"};

class TemperatureInput extends Component {
    handleChange = (event) =>
        {this.props.onTemperatureChange(event.target.value)};

    render() {
        const {scale, temperature} = this.props;
        const {handleChange} = this;

        return (
            <fieldset>
                <legend>
                    Enter temperature in {scaleNames[scale]}
                </legend>
                <label htmlFor={scale}>
                    <input
                        type="text"
                        value={temperature}
                        onChange={handleChange}
                    />
                </label>
            </fieldset>
        )
    }
}

class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = { scale: "C", temperature: ""};
    }


    handleCelciusChange = (temperature) =>
        this.setState({scale: "C", temperature})

    handleFahrenheitChange = (temperature) =>
        this.setState({scale: "F", temperature})


    render() {
        const {scale, temperature} = this.state;
        const {handleCelciusChange, handleFahrenheitChange} = this;
        const celcius = scale === "F"
            ? tryToConvert(temperature, toCelcius)
            : temperature;

        const fahrenheit = scale === "C"
            ? tryToConvert(temperature, toFahrenheit)
            : temperature;

        return (
            <div>
                <TemperatureInput
                    scale="C"
                    temperature={celcius}
                    onTemperatureChange={handleCelciusChange}
                />

                <TemperatureInput
                    scale="F"
                    temperature={fahrenheit}
                    onTemperatureChange={handleFahrenheitChange}
                />
                <BoilingVerdict celcius={parseFloat(celcius)}/>
            </div>
        )
    }

}

Calculator.propTypes = {
    scale: PropTypes.string,
}

const LiftingState = () =>
    <div>
        <h1>LiftingState</h1>
        <Calculator />
    </div>;


const FancyBorder = ({children}) =>
    <div>
        {children}
    </div>


class WelcomeDialog extends Component {
    render() {
        return (
            <FancyBorder>
                <h3>Welcome</h3>
                <p>Thank you for visiting</p>
            </FancyBorder >
        );
    }
}


const Hola = () => <h3>Hola</h3>;
const Hoho = () => <h3>Hoho</h3>;


const SplitGreet = (props) => {
    const {left, right} = props;
    return (
        <div>
            <p>Greet</p>
            {left}
            {right}
        </div>
    )
}

const SplitGreetNew = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

const GreetApp = () => <SplitGreet left={<Hola />} right={<Hoho />}/>

const GreetAppNew = () =>
    <SplitGreetNew>
        <p>GreetNew</p>
        <Hola />
        <Hoho />
    </SplitGreetNew>

const Dialog = (props) => {
    const {title, message} = props;
    return (
        <SplitGreetNew>
            <h3>{title}</h3>
            <p>{message}</p>
            {props.children}
        </SplitGreetNew>
    )
}

const WelcomeDialogNew = () => {
    return (
        <Dialog title="welcome" message="hello, welcome">
            <b>YOHOHOHOOHOOHOHOHOH</b>
        </Dialog>
    )
};

const DialogNew = (props) => {
    const {title, message, children} = props;
    return(
        <SplitGreetNew >
            <h3>{title}</h3>
            <p>{message}</p>
            {children}
        </SplitGreetNew >
    )
}



class SignUpDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoggin: ""};
    }

    handleChange = (event) => this.setState({isLoggin: event.target.value});
    handleSignUp = () => console.log(`Butcher time, ${this.state.isLoggin}`)

    render() {
        const {handleChange, handleSignUp} = this;
        const {isLoggin} = this.state;
        return (
            <DialogNew
                title="Brain Donation Program"
                message="Are you willing Donate?"
            >
                <input
                    value={isLoggin}
                    type="text"
                    onChange={handleChange}
                />

                <button onClick={handleSignUp}>Yes!</button>
            </DialogNew>
        )
    }
}


const ContainmentAndSpecialization = () => {
    return(
        <div>
            <h2>Containment and Specialization</h2>
            <WelcomeDialog />
            <GreetApp />
            <GreetAppNew />
            <WelcomeDialogNew />
            <SignUpDialog />
        </div>
    )
}




class ProductCategoryRow extends Component {
    render() {
        const {category} = this.props;
        return (
            <tr>
                <th colSpan="2">
                    {category}
                </th>
            </tr>
        )
    }
}

class ProductRow extends Component {
    render() {
        const {product} = this.props;
        const name = product.stocked
            ? product.name
            : <b>{product.name}</b>
        return (
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        )
    }
}

class ProductTable extends Component {
    render() {
        const {products, filterText, inStockOnly} = this.props;

        const rows = [];
        let lastCategory = null;
        products.forEach((product) => {
            const {category, name, stocked} = product;

            if (name.indexOf(filterText) === -1) return;
            if (inStockOnly && (!stocked))       return;

            if (category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow
                        category={category}
                        key={category}
                    />
                )
            }
            rows.push(<ProductRow product={product} key={name}/>)
            lastCategory = category;
        })

        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}


class SearchBar extends Component {

    handleFilterTextChange = (event) =>
        this.props.onFilterTextChange(event.target.value);

    handleInStockChange = (event) =>
        this.props.onInStockChange(event.target.checked);

    render() {
        const {
            filterText,
            isStockOnly,
        } = this.props;

        const {handleInStockChange, handleFilterTextChange} = this;

        return (
            <form action="">
                <input
                    type="text"
                    placeholder="Search"
                    value={filterText}
                    onChange={handleFilterTextChange}
                />
                <p>
                    <input
                        type="checkbox"
                        checked={isStockOnly}
                        onChange={handleInStockChange}
                    />
                    {' '}
                    only show products in stock
                </p>
            </form>
        )
    }
}


class FilterProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {filterText: "", isStockOnly: false};
    }
    handleFilterTextChange = (filterText) =>
        this.setState({filterText});
    handleInStockChange = (isStockOnly) => {
        console.log(isStockOnly);
        console.log("test");
        this.setState({isStockOnly});
    }

    render() {
        const { products } = this.props;
        const { handleFilterTextChange, handleInStockChange, } = this;
        const {filterText, isStockOnly} = this.state;
        return (
            <div>
                <SearchBar
                    filterText={filterText}
                    inStockOnly={isStockOnly}
                    onFilterTextChange={handleFilterTextChange}
                    onInStockChange={handleInStockChange}
                />
                <div>
                    <ProductTable
                        products={products}
                        filterText={filterText}
                        inStockOnly={isStockOnly}
                    />
                </div>
            </div>
        )
    }
}

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];



class HelloButtonClass extends Component {

    handleClickOption1() {
      console.log("hello from class(func)");
    }

    handleClickOption2 = () => console.log("hello from class(arrow)")

    render() {

        const {handleClickOption2} = this;

        return (
            <div>
                <button onClick={this.handleClickOption1}>
                    Click me
                </button>
                <button onClick={handleClickOption2}>
                    Click me
                </button>
            </div>
        );
    }
}

const HelloButtonFunc = () => {
    const handleClick = () => console.log("hello from func");
    return  <button onClick={handleClick}>Hello</button>;
}

const CountHooks = () => {
    const [count, setCount] = useState(42);
    const handleClick = () => setCount(count + 1);

    return (
        <div>
            <p>You Click {count} times</p>
            <button onClick={handleClick}>Click me hooks</button>
        </div>
    );
}


const CountEffects = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => setCount(count + 1);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    })

    return (
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={handleClick}>Click me {count}</button>
        </div>
    )
}

const UseState = (props) => {
    const {initialCount} = props;
    const [count, setCount] = useState(initialCount);

    const handleClickDecrement = () => setCount(prevState => prevState - 1);
    const handleClickIncrement = () => setCount(prevState => prevState - 1);
    const handleClickReset     = () => setCount(0);

    return (
        <div>
            Count: {count}
            <button onClick={handleClickReset}>Reset</button>
            <button onClick={handleClickDecrement}>-</button>
            <button onClick={handleClickIncrement}>+</button>
        </div>
    )
}

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.dark);

const UseContext = () => {
    return (
        <div>
            <ThemeContext.Provider value={themes.light}>
                <Toolbar />
                <Toolbar />
                <Toolbar />
                <Toolbar />
            </ThemeContext.Provider>
            <ThemeContext.Provider value={themes.dark}>
                <Toolbar />
                <Toolbar />
                <Toolbar />
                <Toolbar />
            </ThemeContext.Provider>

        </div>
    );
}

const Toolbar = () => <ThemedButton />;

const ThemedButton = () => {
    const theme = useContext(ThemeContext);
    return (
        <button style={
            {
                background: theme.background, color: theme.foreground
            }
        }>
            Hello
        </button>
    );
}

const init = (initialCount) => ({count: initialCount});

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {count: state.count + 1};
        case "decrement":
            return {count: state.count - 1};
        case "reset":
            return init(action.payload);
        default:
            return state;
    }
}

const CounterReduce = ( {initialCount} ) => {
    const [state, dispatch] = useReducer(reducer, initialCount, init);
    const decrement = () => dispatch({type: "decrement"});
    const increment = () => dispatch({type: "increment"});
    const reset     = () => dispatch({type: "reset", payload: initialCount});

    return(
        <div>
            Count: {state.count};
            <button onClick={reset}>reset</button>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}


const UseRef = () => {
    const inputEl = useRef(null);

    const handleClick = () => inputEl.current.focus();
    return (
        <div>
            <input ref={inputEl} type="text" />
            <button onClick={handleClick}>Focus on input</button>
        </div>
    )
}

const Hooks = () => {
    return (
        <div>
            <h2>Hooks</h2>
            <CountHooks />
            <HelloButtonFunc />
            <HelloButtonClass />
            <CountEffects />
            <UseState initialCount={5}/>
            <UseContext />
            <CounterReduce initialCount={0}/>
            <UseRef />
        </div>
    )
}



export default class Main extends Component {

    render() {

        const {date, text, author} = commentInfo;

        return (
            <StrictMode>

                <main>

                    <Comment
                        date={date}
                        text={text}
                        author={author}
                    />

                    <Clock />
                    <HandlingEvents />
                    <Conditionals />
                    <MailBox unreadMessage={message}/>
                    <Page />
                    <NumberList numbers={numbers}/>
                    <Blog posts={posts}/>
                    <FormControl />
                    <LiftingState />
                    <ContainmentAndSpecialization />
                    <FilterProductTable products={PRODUCTS}/>
                    <Hooks />

                </ main>
            </ StrictMode>
        )
    }
}

