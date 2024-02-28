import React, { useState } from "react";
type AuthUser = {
  name: string;
  email: string;
};
function User() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({ name: "Filbert", email: "filbert@mail.com" });
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
}

export default User;
