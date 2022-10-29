import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState("")
  const handleEvent = (event) => {
    setInput(event.target.value);

  }
  const sum = () => {
    alert("clicked me ")
  }

  return (
    <>
      <h1>sgadf</h1>
      <input type="text" onChange={handleEvent} name="name" placeholder='Enter your name' />
      <button onClick={sum}>Click me</button>
      <br></br>
      {input}
    </>
  );
}

export default App;
