import React from "react";
type ListProps<T> = {
  name: string;
  items: T[];
};
const List = <T extends { id: number }>({ name, items }: ListProps<T>) => {
  return (
    <div>
      <h1>{name}</h1>
      {items.map((item, index) => (
        <div key={item.id}>{JSON.stringify(item)}</div>
      ))}
    </div>
  );
};

export default List;
