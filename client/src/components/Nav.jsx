import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    const { title } = props
    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <header className='w-full bg-gray-950 flex flex-row justify-between items-center p-5'>
                <div>
                    <h1 className='text-gray-100 decoration-solid text-6xl italic'>{title}</h1>
                </div>
                <div>
                    <button className='transition ease-in delay-1 duration-1 shadow-lg shadow-myColor-600 bg-myColor-600 hover:bg-myColor-900 hover:shadow-myColor-900 text-myColor-50 font-bold py-2 px-4 rounded mr-3'><Link to={'/recipes'}>Home</Link></button>
                    <button className='transition ease-in delay-1 duration-1 shadow-lg shadow-myColor-600 bg-myColor-600 hover:bg-myColor-900 hover:shadow-myColor-900 text-myColor-50 font-bold py-2 px-4 rounded'><Link to={'/'}>Logout</Link></button>
                </div>
            </header>
        </div>
    )
}

export default Nav;