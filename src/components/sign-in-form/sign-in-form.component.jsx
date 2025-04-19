import { useState} from "react";
import { signInAuthWithEmailAndPassword } from "../../utils/firebase/firbase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.component.scss";
import Button from "../button/button.component";
import {
  signInWithGooglePopUp,
} from "../../utils/firebase/firbase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;


  const signInWithEmailAndPassword = async (event) => {
    event.preventDefault();

    const { email, password } = formFields;
    try {
     await signInAuthWithEmailAndPassword(email, password);
    
    } catch (e) {}
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const logginWithGoogle = async () => {
    await signInWithGooglePopUp();
   
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signInWithEmailAndPassword}>
        <FormInput
          label={"Email"}
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        ></FormInput>

        <FormInput
          label={"Password"}
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={"google"}
            onClick={logginWithGoogle}
          >
            Google Sign in
          </Button>
        </div>
      </form>
      <h2>Dont have Account?</h2>
      <p>Sign up with your email and password</p>
    </div>
  );
};

export default SignInForm;
