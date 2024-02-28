import React from "react";
// Passing React Component as Children using React.ReactNode type
type OscarProps = {
  children: React.ReactNode;
};
const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};

export default Oscar;
