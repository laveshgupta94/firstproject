import React from 'react';
import { useState } from 'react';
const Counter = () => {
    const[count,setCount]=useState(0);
    const increment= () => {
        setCount(count+1);
     }
    function decrement() {
        
        setCount(count-1);
     }

  return (
    <div>
        <h1>The counter is: {count}</h1>
        <button onClick={increment} style={{color:'red',backgroundColor:'yellow'}}>Increment</button>
        <button onClick={decrement} style={{color:'red',backgroundColor:'yellow'}}> Decrement</button>
    </div>
  )
}

export default Counter;