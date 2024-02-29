import React from "react";
import Login from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
  name: string;
};

const Private = ({ isLoggedIn, component: Component, name }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name={name} />;
  } else {
    return <Login />;
  }
};

export default Private;
