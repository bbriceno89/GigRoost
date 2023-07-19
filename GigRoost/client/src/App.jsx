import { useContext, useState } from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import { UserContext } from "./components/context/UserContext";

function App() {
  const { user, setUser } = useContext(UserContext)

  return (
    <div className="w-screen h-screen bg-pallette4">
        <Header />
        <Welcome />
    </div>
  );
}

export default App;
