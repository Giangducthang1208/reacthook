import React from 'react'
import axios from 'axios'
import { useState } from 'react'
export default function UseEffectDemo(props) {
    
    const[arrProduct,setArrProduct] = useState([
        {id:1, Image}
    ]);


  const renderProduct = async()=>{
    // Gọi API
  }
  
    return (
    <div className="container">
        <h3 className='row'>
            Shose Appss
        </h3>
        <div className='row'>
            {renderProduct()}
        </div>
    </div>
  )
}
