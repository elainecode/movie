import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <Link to='/'>
            <button>Home Page</button>
            </Link>
            <Link to='/films/cdevev'>
            <button>Selected Film Page</button>
            </Link>
            
        </div>
    )
}


export default Header