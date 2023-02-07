import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Conleftpic() {
    let [fproduct, setFproduct]=useState([])
    useEffect(()=>{
  axios.get('https://dummyjson.com/products')
  .then(res => {
    console.log(res.data.products);
    setFproduct(res.data.products);
  });
  
    },[])
  return (<>
    {fproduct.slice(0,1).map((a)=>(
    <div className='sublink '>
    
      <h1>{a.title}</h1>
      <img src={a.thumbnail}/>
      <p className="price1 ">Rs: {a.price}/-</p>
    
     
    </div>
    ))}
    </>
  )
}

export default Conleftpic
