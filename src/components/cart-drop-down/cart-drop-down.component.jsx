import "./cart-drop-down.component.scss";
import Button from '../button/button.component'
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from 'react-router-dom';
const CartDropDown = ({}) => {
  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate();

  return (
   <div className="cart-dropdown-container">
    <div className="cart-items">
      {cartItems.map((item) => <CartItem cartItem={item} key={item.id}></CartItem>)}
    </div>
    <Button onClick= {() => navigate('checkout')}>Checkout</Button>
   </div>
  );
};

export default CartDropDown;
