import React from "react";
type ButtonProps = {
  variant: "primary" | "secondary";
} & React.ComponentProps<"button">;
// Dengan ...rest , onClick pun terpassing sebagai props karena termasuk type dari React.ComponentProps<"button">
const Button = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`button-${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
