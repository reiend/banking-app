import { AppController } from "res/components/AppController"
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';

 const SignupSchema = Yup.object().shape({
   firstName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   lastName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
 });

function App() {
  return (
      <AppController/>
  );
}

export default App;

