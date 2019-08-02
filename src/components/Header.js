import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div id='header'>
            <div id='logo'><p>netflixroulette</p></div>
            <Link to='/'>
            <button className='temp'>Home Page</button>
            </Link>
            <Link to='/films/cdevev'>
            <button className='temp'>Selected Film Page</button>
            </Link>         
        </div>
    )
}


export default Header