import React from 'react'
import { useState } from 'react'
import './change.css'
const ColourChange = () => {
    const [isDark ,setDark]= useState(false);
    const toggleTheme =() => {
        setDark(!isDark);
        console.log(isDark);
    }
  return (
    <div className={isDark? "dark":"light"}>
        <h1>Color Change</h1>
        <h1>{isDark ?"Dark Theme" :"Light theme"}</h1>
        <button onClick={toggleTheme}>Change Theme {!isDark? "Dark Theme": "Light Theme"}</button>
    </div>
  )
}

export default ColourChange;