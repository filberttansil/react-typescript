import React from "react";

export type ProfileProps = {
  name: string;
};

const Profile = ({ name }: ProfileProps) => {
  return <div>Profile Name :{name}</div>;
};

export default Profile;
