import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogin = () => {
    setUser({
      name: "Filbert",
      email: "filbert@mail.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <section>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is: {user?.name}</div>
      <div>User email is : {user?.email}</div>
    </section>
  );
};

export default User;
