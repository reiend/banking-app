import { PropTypes } from "res/proptypes/proptypes";
import { forwardRef } from "react";

const Input = forwardRef(({name}, ref) => <input 
  type="text" 
  id={name} 
  name={name} 
  ref={ref} />);

const Button = ({title, onClick, name}) => {
  if(!title) return <button name={name} onClick={onClick}>{name}</button>
  if(!name)  return <button onClick={onClick}>{title}</button>
};

const {InputPropTypes, ButtonPropTypes} = PropTypes;
Button.propTypes                        = {...ButtonPropTypes};
Input.propTypes                         = {...InputPropTypes};

export {Input, Button};
