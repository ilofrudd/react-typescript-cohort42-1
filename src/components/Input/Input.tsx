import { InputProps } from "./types";
import { InputWrapper, InputLabel, InputComponent } from "./styles";

function Input({ disabled=false, error, id, name, type = "text", placeholder, label }: InputProps) {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <InputComponent
        $error = {error}
        disabled={disabled}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
      ></InputComponent>
    </InputWrapper>
  );
}
export default Input;