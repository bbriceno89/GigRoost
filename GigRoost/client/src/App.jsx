import { useState } from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import CardList from "./components/CardList"; 
function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="w-screen h-screen bg-pallette4">
      <Header />
      <Welcome />
      <CardList /> {/* Add the CardList component here */}
    </div>
  );
}

export default App;
