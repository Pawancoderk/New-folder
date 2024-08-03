import { useState } from 'react'
import './App.css'

function App() {
   let [value , setvalue] = useState(0);

  
  function addvalue(){
    value = value+1;
    setvalue(value);
  }
  
  function removevalue(){
    setvalue(value-1);
   
  }
  
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter {value}</h2>

      <button onClick={addvalue}>Increase value</button> 
      <button onClick={removevalue}>Decrease value</button>
    
    </>
  )
}

export default App
