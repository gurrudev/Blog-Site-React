import React, { useState } from 'react'
import { loginUser } from '../../../api/apiCalls'
import { useNavigate } from 'react-router-dom'


function Login() {
const [email, setemail] = useState('')
const [password, setpassword] = useState('')
const navigate = useNavigate()
    const submit = async() =>{  
        
        // if data is passing by form then   
        //     e.preventDefault() 
        // else
        //     no

        //make api call to server with email and passowrd as params
        const reqBody={email, password}
        const response = await loginUser(reqBody)
        if(response){
            navigate('/')
        }else{
            console.log('bye');
        }
       
    }

    return (
        <>
            <div>
                {/* <form action=""> */}
                    <label htmlFor="email"></label>
                    <input value={email} onChange={(e)=>setemail(e.target.value)} type="email" id="Email" name="email" placeholder="Enter Email Address" />
                    <label htmlFor="password"></label>
                    <input value={password} onChange={(e)=>setpassword(e.target.value)} type="password" id="Password" name="password" placeholder="Enter Password" />
                    <button onClick={submit} >Login</button>
                {/* </form> */}
            </div>
        </>
    )
}

export default Login