import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import {UsersContext} from '../../contexts/users.context'
import "./navigation.styles.scss";
import { signOutUser } from "../../utils/firebase/firbase.utils";
const Navigation = () => {

  const { currentUser, setCurrentUser} = useContext(UsersContext);

  const signOuHandler = async () => {
    await signOutUser();
    setCurrentUser(null)
  }

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrwnLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {!!currentUser ?  <Link className="nav-link" onClick={signOuHandler}>
            Sign Out
          </Link> : <Link className="nav-link" to="/signin">
            Sign In
          </Link> }
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
