import { useState } from 'react'
import Navbar from './Navbar';
import Title from './title'
import Logo from './logo';
import Button from "./button";
import ComboBox from './combobox';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App"> 
      <Title />
      <Logo />
      <ComboBox />
    </div>
  )
}

export default App
