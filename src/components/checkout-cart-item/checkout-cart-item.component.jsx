import { useContext } from "react";
import "./checkout-cart-item.component.scss";
import { CartContext } from "../../contexts/cart.context";
const CheckoutCartItem = ({ cartItem }) => {
  const { decrementQuantityOfItem, addToCart, removeItem } = useContext(CartContext);
  return (
    <div className="checkout-item-container">
      <span className="image-container">
        <img src={cartItem.imageUrl} alt={cartItem.name} />
      </span>
      <span className="name">{cartItem.name}</span>

      <span className="quantity">
        <span onClick={() => decrementQuantityOfItem(cartItem)}> {"<"} </span>
        {cartItem.quantity}{" "}
        <span onClick={() => addToCart(cartItem)}> {">"} </span>
      </span>
      <span className="price">{cartItem.price * cartItem.quantity}</span>
      <span className="remove-button" onClick={() => removeItem(cartItem)}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutCartItem;
