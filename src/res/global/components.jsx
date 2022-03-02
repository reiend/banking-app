import Proptype       from "prop-types";
import { forwardRef } from "react";

const Input = forwardRef(({name}, ref) => <input 
  type="text" 
  id={name} 
  name={name} 
  ref={ref} />);

Input.propTypes = {
  name: Proptype.string,
};


const Button = ({title, onClick, name}) => {
  if(!title) return <button name={name} onClick={onClick}>{name}</button>
  if(!name)  return <button onClick={onClick}>{title}</button>
};


Button.propTypes = {
  title:   Proptype.string,
  onClick: Proptype.func,
};

export {Input, Button};

