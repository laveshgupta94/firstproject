import React from 'react';
import { useState } from 'react';
const Filteritem = () => {
    const [items]=useState(["China", "India", "Japan", "South Korea", "Indonesia", "Vietnam", "Thailand", "Philippines", "Malaysia", "Singapore", "Saudi Arabia", "United Arab Emirates", "Israel", "Turkey", "Russia"]);
    const[filter,setFilter]=useState("");
    const filteredItems= items.filter(item=> 
        item.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <div> 
        <h1>Item List</h1>
        <input type="text" placeholder="Search item" value={filter} onChange={(e)=> setFilter(e.target.value)}/>
        <ul>
            {filteredItems.map((item,index)=>(
            <li key={index}>{item}</li>))}
        </ul>
     </div>
  )
}

export default Filteritem;