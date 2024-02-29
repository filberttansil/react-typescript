import "./App.css";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";

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
      <Private isLoggedIn={false} component={Profile} name="Filbert" />
    </div>
  );
}

export default App;
