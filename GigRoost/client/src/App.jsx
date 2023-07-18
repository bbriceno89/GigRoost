import { useState } from 'react'
import Header from './components/Header'
import Welcome from './components/Welcome'

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className='w-screen h-screen bg-red-500 '>
      <Header />
      <Welcome/>
    </div>
  )
}

export default App
