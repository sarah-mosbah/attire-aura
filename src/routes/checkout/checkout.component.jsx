import { useContext } from "react";
import "./checkout.component.scss";
import { CartContext } from "../../contexts/cart.context";
import CheckoutCartItem from "../../components/checkout-cart-item/checkout-cart-item.component";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <h1>Checkout</h1>
      <div className="checkout-container">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((item) => {
          return (
            <CheckoutCartItem cartItem={item} key={item.id}></CheckoutCartItem>
          );
        })}
        <div className="total">
          <span>
            Total: $
            {cartItems.reduce(
              (acc, item) => acc + item.price * item.quantity,
              0
            )}
          </span>
        </div>
      </div>
    </>
  );
};

export default Checkout;
