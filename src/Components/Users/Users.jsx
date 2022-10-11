import React, { useContext } from 'react';
import { usersContext } from '../../Layout/Root';
import User from '../User/User';

const Users = () => {
    const users = useContext(usersContext);
    console.log(users);
    return (
        <div>
            <h1>Users {users.slice(0,50).length}</h1>
            <div className='flex flex-wrap gap-10  md:mx-32 justify-center'>
            {
                users.slice(0,50).map(user=><User 
                    
                user={user}
                ></User>)
            }
            </div>
        </div>
    );
};

export default Users;