import "./cart-item.component.scss";

const CartItem = ({cartItem}) => {
  const {name, quantity, imageUrl, price} = cartItem;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{price * quantity}</span>
     </div>
    </div>
  );
};

export default CartItem;
