import React from 'react'

export default function About({image="https://via.placeholder.com/215",about}) {
// console.log("I did")
    return (
        <div>
           <aside>
            <img src={image} alt="blog logo"/>   
            <p>{about}</p>
              
            </aside> 
        </div>
    )
}
