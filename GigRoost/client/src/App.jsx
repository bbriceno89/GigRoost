import { useState } from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="w-screen h-screen bg-pallette4">
      <Header />
      <Welcome />
    </div>
  );
}

export default App;
