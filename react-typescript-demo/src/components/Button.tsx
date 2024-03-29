import React from "react";
// Accept Click Event
type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};
const Button = (props: ButtonProps) => {
  return (
    <button onClick={(event) => props.handleClick(event, 1)}>Click Me!</button>
  );
};

export default Button;
