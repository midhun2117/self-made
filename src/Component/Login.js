import React, { Component } from 'react'
import './Login.css';

export default class Login extends Component {

  render() {
   
    return (
      
        <>
        <div className='full'>
          <center className='user'>USER LOGIN</center>
          <div className='username'>
            <label for='username'>User Name:</label><br/>
            <input type='text' className='usernamebox' placeholder=''></input>
          </div>
          <div className='password'>
            <label for='password'>Password:</label><br/>
            <input type='password' className='passwordbox' placeholder=''></input>
          </div>
          <div className='login'>
            <button type='submit' className='loginbutton'>Login</button><br/><br/>
            <p className='signup'>No Account?<button type='submit' className='signupbutton'>Signup</button></p>
          </div>
        </div>
      </>
    )
  }
}
