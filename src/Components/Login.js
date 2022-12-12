
import React,{ useState } from 'react'
import { json } from 'react-router-dom';

function Login() {
    const[Username, setUsername]= useState('');
    const[password, setpassword]= useState('');
    const[Error,setError]=useState(false);
    const formHandler=(event)=>
    {
      event.preventDefault();
      if(Username.length==0 || password.length==0)
      { 
        setError(true);
      }
      if(Username && password)
      { 
        const loginobj={
            name:Username,
            pwd:password
        }
        console.log(loginobj);
        alert(json.stringify(loginobj));
      }
    }
  return (
    <div>
    <center><h2>Login Page</h2>
    
    <form onSubmit={formHandler}>
    Username :<input type="text" value={Username} placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/><br/>
   <div>
    {Error && Username.length==0?
    <label style={{color:'red'}}>Username is required</label>:""}
    </div>
    password :<input type="password" value={password} placeholder="password" onChange={(e)=>setpassword(e.target.value)}/><br/>
    <div>
    {Error && password.length==0?
    <label style={{color:'red'}}>
    Password is required</label>:""}
    </div>
    <button type="submit">Login</button>
    </form>  
    </center>
    </div>
  )
}

export default Login