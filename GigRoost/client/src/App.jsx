import { useContext, useState } from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import CardList from "./components/CardList"; 
import Details from "./components/Details";
import { UserContext } from "./components/context/UserContext";
import { Router, Routes, Route } from "react-router-dom";

function App() {
  const { user, setUser } = useContext(UserContext)
  console.log(user)
  return (
   /* <div className="w-screen h-screen bg-pallette4">
     <Header />
      <Routes>
        <Route path="/" element={!user ? <Welcome /> : <CardList />} />
      </Routes> 
    </div> */
    
    <Details />
  );
}

export default App;
