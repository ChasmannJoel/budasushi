import { useState } from 'react'
import Navbar from './Navbar';
import Title from './title'
import Logo from './logo';
import Button from "./button";
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Title />
      <Logo />
      <Button />
    </div>
  )
}

export default App
