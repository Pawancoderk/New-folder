import React, {useState,useContext} from 'react'
import UserContext from '../context/Usercontext'

function Login() {
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')

    const handleSubmit = ()=>{
        
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='username' />
        <input type="password" placeholder='password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login