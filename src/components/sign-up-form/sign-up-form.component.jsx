import { useState, useContext } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firbase.utils";
import FormInput from "../../components/form-input/form-input.component";
import "./sign-up-form.component.scss";
import Button from "../button/button.component";
import { UsersContext } from "../../contexts/users.context";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;
  const {setCurrentUser} = useContext(UsersContext);
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signUpWithEmailAndPassword = async (event) => {
    event.preventDefault();

    const { email, password, confirmPassword } = formFields;

    if (password !== confirmPassword) {
      alert("Condirm Password not matchung");
      return;
    }

    try {
      const user = await createAuthUserWithEmailAndPassword(email, password);

      if (user) {
        await createUserDocFromAuth(user, { displayName });
        resetFormFields();
        setCurrentUser(user);
      }
    } catch (e) {}
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h3>Dont have an account ?</h3>
      <span>Sign Up with your email and password</span>
      <form onSubmit={signUpWithEmailAndPassword}>
        <FormInput
          label={"Display Name"}
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        ></FormInput>
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

        <FormInput
          label={"Confirm Password"}
          required
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
