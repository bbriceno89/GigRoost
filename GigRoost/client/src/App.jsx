import { useContext, useEffect, useState } from "react";
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
import Login from "./components/Login";
import Signup from "./components/Signup";
import NewRental from "./components/NewRental";

function App() {
  const { user, setUser } = useContext(UserContext)

  useEffect(()=> {
    fetch('/api/check_session')
    .then(r=> {
      if (r.ok) {
        return r.json()
      }
    })
    .then(data=>setUser(data))
  }, [])

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
        <Route path='/login' element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/rentals/new" element={<NewRental />} />
      </Routes>
>>>>>>> main
    </div>
  );
}

export default App;
