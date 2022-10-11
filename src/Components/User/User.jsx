import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    console.log(user);
    const {email,picture,gender,name,dob}=user;
    return (
        <div>
            <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-100 text-gray-900">
                <img src={picture.large} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">User</span>
                    <h2 className="text-xl font-semibold tracking-wide">{user.name.title +" "+ user.name.first +" "+ user.name.last}</h2>
                </div>
                <p className="dark:text-gray-900">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
                <Link to='userInfo'>UserInfo</Link>
            </div>
        </div>
    );
};

export default User;