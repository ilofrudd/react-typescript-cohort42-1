export type InputTypes = "e-mail" | "password" | "number";

export interface InputProps {
    type? : InputTypes;
    name : string;
    placeholder : string;
    label : string;    
}