import React from 'react'
import { useState } from 'react';
const Loggedin = () => {
    const[isLogin, setisLogin]=useState(false);
    const toggleLogin =()=>{
        setisLogin(!isLogin);
        console.log("Login status",!isLogin);
    }
  return (
    <div><h1>Login  Page</h1>
    <h1>{isLogin ? "Welecome to login page": "Please Login Agin"}</h1>
    <button onClick={toggleLogin}>{isLogin? "Logout" : "Login"}</button>
    <h1>{isLogin ? "You are on login page": " pAGE IS LOGOUT"}</h1>
    </div>
  )
}

export default Loggedin;