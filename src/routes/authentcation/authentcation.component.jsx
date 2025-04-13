import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentcation.component.scss";

const Authentcation = () => {
  return (
    <>
      <h1>Sign In</h1>
      <div>
        <div className="form-container">
          <SignInForm />
          <SignUpForm />
        </div>
      </div>
    </>
  );
};

export default Authentcation;
