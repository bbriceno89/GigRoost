import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Welcome from './components/Welcome'

function App() {
  const [user, setUser] = useState(null)

  return (
    <>
      <Header />
      <Welcome/>
    </>
  )
}

export default App
