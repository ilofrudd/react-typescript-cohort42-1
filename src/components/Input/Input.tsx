import "./styles.css";
import { InputProps } from "./type";

function Input({ name, type = "text", placeholder, label }) {
  return (
    <div className="input-wrapper">
      <label className="input-label" htmlFor={id}>{label}</label>
      <input
        className="input-component"
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;