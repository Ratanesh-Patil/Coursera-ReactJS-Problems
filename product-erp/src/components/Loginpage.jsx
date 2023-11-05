import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Loginpage() {
    const [login, setlogin] = useState({})
    let navigate = useNavigate()

    const handleChange=(e) =>{
        e.preventDefault()
        setlogin(()=>({
            ...login ,  [e.target.name]: e.target.value}))
    }

    const handlesubmit=(e) =>{
        e.preventDefault()
       if(login.email === "ratnesh@123" && login.passw === "12345"){
            navigate('/list')
       }
    }
  return (
    <div>
         <form action=""> 
				<div> 
					<label htmlFor="email">Email</label>
					<input type="text" name="email" id="email" onChange={handleChange}/> 
				</div> 
				<div> 
					<label htmlFor="passw">Password</label>
					<input type="text" name="passw" id="passw" onChange={handleChange}/> 
				</div>  
				<button type="submit" onClick={(e)=>handlesubmit(e)}>Login</button>
			</form>
    </div>
  )
}

export default Loginpage