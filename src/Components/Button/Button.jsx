import { Link } from "react-router-dom";
import './Button.css';
import WhiteArrow from "../../assets/Icons/WhiteArrow.svg";

function Button({ arrow, buttonStyle, loading, children, ...props }) {
  return (
    <button className={`button ${buttonStyle}`} {...props}>
      {children} {arrow && <img src={WhiteArrow} alt="Arrow Icon" />}
    </button>
  );
}

export default Button;
