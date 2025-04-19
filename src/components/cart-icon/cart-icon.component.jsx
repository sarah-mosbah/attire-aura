import "./cart-icon.component.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartDropDownContext } from "../../contexts/cart-dropdown.context";
import { useContext } from "react";
const CartIcon = () => {
  const {setVisibility, visibility} = useContext(CartDropDownContext);
  const onClickHandler = () => {
   
     setVisibility(!visibility);
  }

  return (
    <div className="cart-icon-container" onClick={onClickHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
