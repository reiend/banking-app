import Proptype      from "prop-types";
import { Button }    from "res/global/components";

export const ExpenseButton = (props) => <Button {...props}/>

ExpenseButton.protoTypes = {
  title:   Proptype.string,
  onClick: Proptype.func,
};
