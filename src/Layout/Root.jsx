import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

export const usersContext = createContext([])
const Root = () => {
    const users = useLoaderData();
    
    // console.log(users);
    const {results}=users;
    // console.log(results);
    return (
        <div>
           <usersContext.Provider value={results}>
           <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
           </usersContext.Provider>
        </div>
    );
};

export default Root;