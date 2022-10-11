import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <section>
                <div className="bg-violet-400">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900">Provident blanditiis cum exercitationem</h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
                        <div className="flex flex-wrap justify-center">
                            <NavLink to='/root'className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 text-gray-50">Get started</NavLink>
                            <button type="button" className="px-8 py-3 m-2 text-lg border rounded border-gray-700 text-gray-900">Learn more</button>
                        </div>
                    </div>
                </div>
                <img src="https://source.unsplash.com/random/480x320" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500" />
            </section>
        </div>
    );
};

export default Home;