import "./App.css";

import List from "./components/generics/List";

function App() {
  // Object props passed to Person.tsx
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };
  // Array of Objects props passed to PersonList.tsx
  const personList = [
    {
      id: 1,
      first: "Bruce",
      last: "Wayne",
    },
    {
      id: 2,
      first: "Corry",
      last: "Wayne",
    },
    {
      id: 3,
      first: "Filbert",
      last: "Wayne",
    },
  ];
  return (
    <div className="App">
      <List name="Demo List" items={personList} />
    </div>
  );
}

export default App;
