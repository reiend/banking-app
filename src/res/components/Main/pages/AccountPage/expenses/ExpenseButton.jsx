import { Button }    from "res/global/components";
import { PropTypes } from "res/proptypes/proptypes";  

export const ExpenseButton = (props) => <Button {...props}/>

const {ExpenseButtonPropTypes} = PropTypes;
ExpenseButton.protoTypes       = {...ExpenseButtonPropTypes};

