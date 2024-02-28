import "./App.css";
import Button from "./components/Button";
// Style Props
import Container from "./components/Container";
// useReducer
import Counter from "./components/Counter";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
// Children
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

import Box from "./components/context/Box";
import ThemeContextProvider from "./components/context/ThemeContext";
import User from "./components/context/User";
import UserContextProvider from "./components/context/UserContext";

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
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
