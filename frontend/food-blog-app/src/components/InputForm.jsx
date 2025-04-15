import React, { useState } from 'react'
import axios from 'axios'

function InputForm() {
    const[email,setEmail] = useState("")
    const[password,setPassword] =useState("")
    const[isSignUp, setIsSignUp] = useState(false)
    
    const handleOnSubmit = async(e) =>{
        e.preventDefault()
        let endPoint = (isSignUp)? "signUp" : "login"
        await axios.post(`http://localhost:5000/${endPoint}`,{email,password})
    }

  return (
    <>
    <form className='form'onSubmit={handleOnSubmit}>
        <div className='form-control'>
            <label htmlFor="">Email</label>
            <input type="email" className='input' onChange={(e)=>setEmail(e.target.value)} required/>
        </div>

        <div className='form-control'>
            <label htmlFor="">Passowrd</label>
            <input type="password" className='input' onChange={(e)=>setPassword(e.target.value)} required/>
        </div>

        <button type='submit'>{(isSignUp)?"Sign Up":"Login"}</button><br />
        <p onClick={()=>setIsSignUp(pre => !pre)}>{(isSignUp)?"Already have an Account":"create new account"}</p>
    </form>
    </>
  )
}

export default InputForm