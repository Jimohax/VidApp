import React from "react";
import {useParams} from 'react-router-dom'




export default function productDetails() {
  const  handleSave = () => {
      // Navigate to /products
    };
    const {id} = useParams()


    return (
      <div>
        <h1>Product Details - {id} </h1>
        {console.log(id)}
        <button onClick={handleSave}>Save</button>
      </div>
    )
  }
  


 




