import { useState } from 'react'
import './App.css'
import Navbar from './Navbar';
import Title from './title'
import Logo from './logo';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Title />
      <Logo />
    </div>
  )
}

export default App
