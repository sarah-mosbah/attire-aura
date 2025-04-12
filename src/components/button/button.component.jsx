import "./button.component.scss";

const ButtonTypeClasses = {
  google: 'google-sign-in',
  inverted: 'inverted'
}

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button {...otherProps} className={`button-container ${ButtonTypeClasses[buttonType]}`}>
      {children}
    </button>
  );
};

export default Button;
