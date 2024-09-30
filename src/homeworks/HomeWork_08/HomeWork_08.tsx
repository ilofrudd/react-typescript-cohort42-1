import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { HomeworkWrapper } from "./styles";

function Homework_08() {
  return (
    <HomeworkWrapper>
      <Button
        name="Working Button"
        onClick={() => {
          console.log("I am working Button");
        }}
      />

      <Button
        isDeleteVariant={true}
        name="Delete Button"
        onClick={() => {
          console.log("I am Delete Button");
        }}
      />

      <Button
        disabled={true}
        name="Not working Button"
        onClick={() => {
          console.log("I am not working Button");
        }}
      />

      <Input
        id="input1"
        label="Good input"
        placeholder="Enter your first name"
        name="first name"
      />

      <Input
        disabled={true}
        id="input2"
        label="Disable input"
        placeholder="Enter your first name"
        name="first name"
      />
      <Input
        error="Incorrect input"
        id="input3"
        label="Error input"
        placeholder="Enter your first name"
        name="first name"
      />
      <Input
        disabled={true}
        error="Incorrect input"
        id="input4"
        label="Disable&error input"
        placeholder="Enter your first name"
        name="first name"
      />
    </HomeworkWrapper>
  );
}

export default Homework_08;
