import "./cart-drop-down.component.scss";
import Button from '../button/button.component'
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
const CartDropDown = ({}) => {
  const {cartItems} = useContext(CartContext)
  return (
   <div className="cart-dropdown-container">
    <div className="cart-items">
      {cartItems.map((item) => <CartItem cartItem={item} key={item.id}></CartItem>)}
    </div>
    <Button>Checkout</Button>
   </div>
  );
};

export default CartDropDown;
