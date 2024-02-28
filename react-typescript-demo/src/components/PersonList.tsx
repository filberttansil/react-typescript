import React from "react";

import { PersonListProps } from "./Person.type";

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.personList.map((person) => (
        <h3>
          {person.name.first} {person.name.last}
        </h3>
      ))}
    </div>
  );
};

export default PersonList;
