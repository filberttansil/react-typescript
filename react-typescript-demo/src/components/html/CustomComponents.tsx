import React from "react";
import Greet from "../Greet";

// Extracting type from an existing component ( assume we are using a UI Libs that we cant access the types )
const CustomComponents = (props: React.ComponentProps<typeof Greet>) => {
  return <div>{props.name}</div>;
};

export default CustomComponents;
