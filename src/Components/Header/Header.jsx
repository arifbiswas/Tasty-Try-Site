import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (

       <div className='md:flex  justify-around items-center bg-gray-100 h-[100px]' >
        <div >
            <h1 className='text-3xl font-bold header'>Hero Test</h1>
        </div>
        <div className='flex flex-col md:flex-row justify-center py-5'>
            <NavLink to='/home'><span className='header-container ml-10 p-3'>Home</span></NavLink>
            <NavLink to='/users'><span className='header-container ml-10 p-3'>Users</span></NavLink>
            <NavLink to='/about'><span className='header-container ml-10 p-3'>About</span></NavLink>
            <NavLink to='/blogs'><span className='header-container ml-10 p-3'>Blogs</span></NavLink>
            
        </div>
       </div>
    );
};

export default Header;