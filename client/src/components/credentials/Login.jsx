import React, { useState } from 'react'
import { loginUser } from '../../../api/apiCalls'

function Login() {
const [email, setemail] = useState('')
const [password, setpassword] = useState('')

    const submit = async() =>{  
        // e.preventDefault() 
        //make api call to server with email and passowrd as params
        const reqBody={email, password}
        const response = await loginUser(reqBody)
        console.log(response);
       
    }

    return (
        <>
            <div>
                <div >
                    <label htmlFor="email"></label>
                    <input value={email}  onChange={(e)=>setemail(e.target.value)} type="email" id="Email" name="email" placeholder="Enter Email Address" />
                    <label htmlFor="password"></label>
                    <input value={password} onChange={(e)=>setpassword(e.target.value)} type="password" id="Password" name="password" placeholder="Enter Password" />
                    <button onClick={submit} >Login</button>
                </div>
            </div>
        </>
    )
}

export default Login