import React from 'react'
import { Link } from 'react-router-dom'

const Film = () => {
    return (
        <>
        <div id="list-item">
         <Link to='/films/wwwd'> 
         <p> This is a film. Click me </p>
         </Link>
        </div>
          <div id="list-item">
          <Link to='/films/wwwd'> 
          <p> This is a film. Click me </p>
          </Link>
         </div>
           <div id="list-item">
           <Link to='/films/wwwd'> 
           <p> This is a film. Click me </p>
           </Link>
          </div>
          </>
    )

}


export default Film