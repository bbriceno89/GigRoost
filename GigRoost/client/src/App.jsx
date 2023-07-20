import { useContext, useState } from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import CardList from "./components/CardList"; 
<<<<<<< HEAD
import Details from "./components/Details";

function App() {
  const [user, setUser] = useState(null);
=======
import { UserContext } from "./components/context/UserContext";
import { Router, Routes, Route } from "react-router-dom";
>>>>>>> main

function App() {
  const { user, setUser } = useContext(UserContext)
  console.log(user)
  return (
    <div className="w-screen h-screen bg-pallette4">
      <Header />
<<<<<<< HEAD
      <Welcome />
      <CardList /> {/* Add the CardList component here */}
      <Details /> {/* Add the Details component here */}
      
=======
      <Routes>
        <Route path="/" element={!user ? <Welcome /> : <CardList />} />
      </Routes>
>>>>>>> main
    </div>
  );
}

export default App;
