
import './App.css';
import { useState } from 'react';

function App() {
   const[text,setText]= useState("")
   const handleonChange= (e) =>{
    e.preventDefault()
    let newtext=e.target.value
    setText(newtext)
   }
   const handleChange= () =>{
    let newtext = text.toUpperCase()
    setText(newtext)
   }
  return (
    <div className="App">
      <input type="text" name='text' onChange={handleonChange} />
      <button onClick={handleChange}>click</button>
      <div>{text}</div>
    </div>
  );
}

export default App;
