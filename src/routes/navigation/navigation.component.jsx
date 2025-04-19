import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UsersContext } from "../../contexts/users.context";
import "./navigation.styles.scss";
import { signOutUser } from "../../utils/firebase/firbase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-drop-down/cart-drop-down.component";
import {
  CartDropDownContext,
} from "../../contexts/cart-dropdown.context";
const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UsersContext);
  const { visibility } = useContext(CartDropDownContext);

  const signOuHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

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
            {!!currentUser ? (
              <Link className="nav-link" onClick={signOuHandler}>
                Sign Out
              </Link>
            ) : (
              <Link className="nav-link" to="/signin">
                Sign In
              </Link>
            )}
            <CartIcon></CartIcon>
          </div>
          {visibility && <CartDropDown />}
        </div>

        <Outlet />
      </Fragment>

  );
};

export default Navigation;
