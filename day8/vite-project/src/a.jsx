import React from 'react'
import React, { useEffect, useState } from 'react';
import axios from 'axios';  

const a = () => {
   

    const [post,setpost]=useState([])
    const [loading,setloading]=useState(true)


    useEffect(()=>
    axios.get("https://jsonplaceholder.typicode.com/photos")
    .then(response=>{
        setpost(response.data)
        setloading(false)
    }))
    return(
        <div>
            if(loading)
            {
                <h1>loading...</h1>
            }
            else{
                <ul>
                {posts.map(post => (
                  <li key={post.id}>
                    <h3>{post.id}</h3>
                    <p>{post.albumId}</p>
                  </li>
                ))}
              </ul>
              
            }
        </div>
    );
}

export default A;