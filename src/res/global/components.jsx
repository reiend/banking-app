import Proptype       from "prop-types";
import { forwardRef } from "react";
import { 
  Button as ButtonCustom, 
  Input as InputCustom,
} from "@chakra-ui/react"

const Input = forwardRef(({name}, ref) => <InputCustom 
  type="text" 
  id={name} 
  name={name} 
  ref={ref} />);

Input.propTypes = {
  name: Proptype.string,
};


const Button = ({title, onClick, name, colorScheme, variant, w}) => {
  if(!title) { 
    return (
      <ButtonCustom 
        variant="outline" 
        name={name} 
        onClick={onClick}
        colorScheme={colorScheme} 
        variant={variant}
        w={w}
      >
        {name}
      </ButtonCustom>
    );
  }
  if(!name) {
    return (
      <ButtonCustom 
        colorScheme={colorScheme} 
        variant={variant}
        onClick={onClick}
      >
        {title}
      </ButtonCustom>
    );
  }
};


Button.propTypes = {
  title:   Proptype.string,
  onClick: Proptype.func,
};

export {Input, Button};

