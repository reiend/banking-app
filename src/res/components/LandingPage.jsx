import { 
  useState, 
  useReducer, 
  useEffect, 
  useRef, 
  forwardRef, 
  useImperativeHandle,
  createContext,
  useContext,
} from "react";

const init = (initialCount) => ({count: initialCount});
const reducer = (state, action) => {
  switch(action.type) {
    case "INCREMENT": return {count: state.count + 1};
    case "DECREMENT": return {count: state.count - 1};
    case "RESET": return init(action.payload);
    default: return state;
  };
};
const SetReducer = () => {
  const initialCount = 0;
  const [{count}, dispatch] = useReducer(reducer, initialCount, init)
  const onClickIncrement = () => dispatch({type: "INCREMENT"});
  const onClickDecrement = () => dispatch({type: "DECREMENT"});
  const onClickReset     = () => dispatch({type: "RESET", payload: initialCount});
  return(
    <div>
      {count}
      <button onClick={onClickDecrement}>Decrement</button>
      <button onClick={onClickIncrement}>Inrement</button>
      <button onClick={onClickReset}>Reset</button>
    </div>  
  );
};

const SetCount = ( {count, onClickCount } ) => {
  const [userInput, setUserInput] = useState("");
  const onChangeUserInput = (event) => {
    let input = parseFloat(event.target.value);
    if (Number.isNaN(input)) {
      setUserInput(``);
      return ""
    };
    setUserInput(`$${input}`);
    console.log(input);
  };
  return(
    <div>
      <h3>{count}</h3>
      <button onClick={onClickCount}>Click Me</button>
      <div>
        <p>{userInput}</p>
        <input type="text" onChange={onChangeUserInput}/>
      </div>
    </div>  
  );
};

const UseRef = () => {
  const titleRef = useRef(null);
  const onClickTitle = () => {
    titleRef.current.remove();
  }
  return(
    <div>
      <h2 ref={titleRef}>I am Title</h2>
      <button onClick={onClickTitle}>Delete</button>
    </div>
  );
};

const Button = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);
  const onClickCount = () => setCount((count) => count + 1);
  useImperativeHandle(ref, () => ({ onClickCount, }));
  return(
    <div>
      <p>{count}</p>
      <button onClick={onClickCount}>count me from child </button>
    </div>
  );
});

const UserImperativeHook = () => {
  const buttonCountRef = useRef(null);
  const onClickCount = () => buttonCountRef.current.onClickCount();
  return(
      <div>
        <button onClick={onClickCount}>Button from parent</button>
        <Button ref={buttonCountRef}/>
      </div>
  );
};

const InputContext = createContext(null);

const Input = () => {
  const {setUsername} = useContext(InputContext);
  const onChangeInput = (event) => setUsername(event.target.value);
  return(
    <input type="text" onChange={onChangeInput}/>
  );
};

const UserName = () => {
  const {username} = useContext(InputContext);
  return(
    <div>{username}</div>
  );
};

const UseContext = () => {
  const [username, setUsername] = useState("");
  return(
    <div>
       <InputContext.Provider value={{username, setUsername}}>
         <Input/>
         <UserName/>
       </InputContext.Provider>
    </div>
  );
};



export const LandingPage = ( {count, onClickCount} ) => {
  useEffect(() => {
      console.log("Called");
  }, [])
  return(
    <div>
      <h2> LandingPage </h2>
      <SetCount onClickCount={ onClickCount } count={count}/>
      <SetReducer/>
      <UseRef/>
      <UserImperativeHook/>
      <UseContext />
    </div>
  )
}

