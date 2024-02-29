import "./App.css";

import MutableRef from "./components/ref/MutableRef";

function App() {
  // Object props passed to Person.tsx
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };
  // Array of Objects props passed to PersonList.tsx
  const personList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Corry",
      last: "Wayne",
    },
    {
      first: "Filbert",
      last: "Wayne",
    },
  ];
  return (
    <div className="App">
      <MutableRef />
    </div>
  );
}

export default App;
