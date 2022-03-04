import { Link } from "react-router-dom";
import { Formik, Form, useField} from "formik";
import * as Yup from 'yup';
import { 
  Button, 
  chakra, 
  FormControl, 
  Input, 
  FormLabel,
  FormErrorMessage,

} from "@chakra-ui/react"

// export const Login = () => {
//
//   return(
//     <Button as={Link} to="/account">Login</Button>
//   );
// };
//

const CustomInput = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return(
   <FormControl 
      my="2rem"
      w="100%"
      isInvalid={meta.error && meta.touched}
    >
    <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
    <Input {...field} {...props} />
    <FormErrorMessage>{meta.error}</FormErrorMessage>
  </FormControl>
  );
};

export const Login = () => {
  return (
    <Formik
      initialValues={{email: "", password: ""}}
      validationSchema={Yup.object({
        email: Yup
          .string()
          .email("Invalid email")
          .required("Please fill up email"),
        password: Yup
          .string()
          .required("Please fill up password"),
      })}
      onSubmit={(values, {isSubmitting, ...test}) => {
        console.log(JSON.stringify(values, null, 2));
        isSubmitting(false);
        console.log(test)
      }}
    >
      <chakra.form 
        w={{base: "60%", lg:"20%"}}
        as={Form}
      >
          <CustomInput
            label="Email: "
            name="email"
            type="email"
            placeholder="Test@gmail.com"
          />  

          <CustomInput
            label="Password: "
            name="password"
            type="password"
            placeholder="************"
          />  

          <Button 
            as={Link}
            to="account"
            colorScheme="primary" 
            variant="outline" 
            type="submit"
            mt="2rem"
          >
          Login
        </Button>
      </chakra.form>
    </Formik>
  );
};

