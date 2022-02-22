import Proptype       from "prop-types";
import { forwardRef } from "react";

export const Input = forwardRef(({name}, ref) => <input 
  type="text" 
  id={name} 
  name={name} 
  ref={ref} />);

Input.propTypes    = {name: Proptype.string};

