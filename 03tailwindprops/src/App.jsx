import { useState } from 'react'
import './App.css'
import { Card } from './components/Card'

function App() {
  let myObj  ={
 username:"Aman",
 age:23
  }
  

  return (
    <>
     <h1 className='text-black bg-green-400  rounded-md p-4 mb-4'>Tailwind Test</h1>
     <Card username = "chaiaurcode" someobj = {myObj} btnText = "click me"/>
     <Card username="aman" btnText = "visit me"/>

   
    </>
  )
}

export default App
