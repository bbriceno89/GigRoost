import { useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import CardList from "./components/CardList";
import Details from "./components/Details";
import { UserContext } from "./components/context/UserContext";
import { Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NewRental from "./components/NewRental";
import MyRentals from "./components/MyRentals";

function App() {
  const { user, setUser } = useContext(UserContext);
  const [selectedRental, setSelectedRental] = useState(null); // State to store selected rental

  const handleRentalClick = (rental) => {
    setSelectedRental(rental);
  };

  return (
    <div className="w-screen h-screen bg-pallette4">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            !user ? <Welcome /> : <CardList onRentalClick={handleRentalClick} />
          }
        />
        <Route
          path="/details"
          element={<Details rental={selectedRental} />} // Pass the selected rental as a prop
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/rentals/new" element={<NewRental />} />
        <Route path="/my_rentals" element={<MyRentals />} />
      </Routes>
    </div>
  );
}

export default App;
