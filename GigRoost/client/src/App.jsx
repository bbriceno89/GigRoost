import { useContext, useState } from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import CardList from "./components/CardList"; 
import Details from "./components/Details";

function App() {
  const [user, setUser] = useState(null);

function App() {
  const { user, setUser } = useContext(UserContext)
  console.log(user)
  return (
    <div className="w-screen h-screen bg-pallette4">
      <Header />
      <Welcome />
      <CardList /> {/* Add the CardList component here */}
      <Details /> {/* Add the Details component here */}
      
    </div>
  );
}
}
export default App;
