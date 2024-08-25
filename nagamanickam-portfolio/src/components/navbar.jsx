import React from 'react'
import './navbar.css'
const navbar = () => {
    return (
        <div className='nav_bar_container'>
            <a><img className='brand_name_icon' src='/images/NAG-artist-Logo-New.png' alt='Nag' /></a>
            <div className='nav_bar_right_side_menu'>
                <p className='menu_item_nav_bar'>Home</p>
                <p className='menu_item_nav_bar'>About</p>
                <p className='menu_item_nav_bar'>Contact</p>
            </div>
        </div>
    )
}

export default navbar
