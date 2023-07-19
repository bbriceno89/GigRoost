import { useContext, useState } from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import CardList from "./components/CardList"; 
import { UserContext } from "./components/context/UserContext";

function App() {
  const { user, setUser } = useContext(UserContext)

  return (
    <div className="w-screen h-screen bg-pallette4">
      <Header />
      <Welcome />
      <CardList />
    </div>
  );
}

export default App;
