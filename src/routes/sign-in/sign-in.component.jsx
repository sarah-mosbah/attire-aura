import {
  sihnInWithGooglePopUp,
  createUserDocFromAuth,
} from "../../utils/firebase/firbase.utils";
const SignIn = () => {
  const logginWithGoogle = async () => {
    const { user } = await sihnInWithGooglePopUp();
    await createUserDocFromAuth(user);
  };

  return (
    <>
      <h1>Sign In</h1>
      <div>
        <button onClick={logginWithGoogle}>Sign in with Google</button>
      </div>
    </>
  );
};

export default SignIn;
