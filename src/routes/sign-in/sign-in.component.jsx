
import {
  signInWithGooglePopUp,
  createUserDocFromAuth,
} from "../../utils/firebase/firbase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";



const SignIn = () => {
  const logginWithGoogle = async () => {
    const { user } = await signInWithGooglePopUp();
    await createUserDocFromAuth(user);
  };

  return (
    <>
      <h1>Sign In</h1>
      <div>
        <button onClick={logginWithGoogle}>Sign in with Google</button>
        <SignUpForm/>
      </div>
    </>
  );
};

export default SignIn;
