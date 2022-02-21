import { forwardRef } from "react";
import Proptype from "prop-types";
export const Input = forwardRef(({name}, ref) => <input type="text" id={name} name={name} ref={ref} />);
Input.propTypes = {name: Proptype.string};

