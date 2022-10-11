import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    
    
    return (
        <div className='flex justify-center items-center h-96'>
            <div className='h-96'>
                <h1 className='text-8xl'>404</h1>
                <h2 className='text-3xl'>Page not found</h2>
                <NavLink to='/home'><span className='mt-12 '>Back to Home</span></NavLink>
            </div>

        </div>
    );
};

export default ErrorPage;