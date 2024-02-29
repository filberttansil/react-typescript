import React from "react";
type HorizontalIndicator = "left" | "center" | "right";
type VerticalIndicator = "top" | "center" | "bottom";
type ToastProps = {
  position:
    | Exclude<`${HorizontalIndicator}-${VerticalIndicator}`, "center-center">
    | "center";
};

const Toast = ({ position }: ToastProps) => {
  return (
    <div>
      <h1>Toast Position : {position}</h1>
    </div>
  );
};

export default Toast;
