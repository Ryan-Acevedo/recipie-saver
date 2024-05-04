import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { userContext } from '../contexts/userContext';

const Nav = (props) => {
    const navigate = useNavigate();
    const { title } = props
    const {user} = useContext(userContext);

    const logout = () => {
        axios.post('http://localhost:8000/api/logout', {}, { withCredentials: true })
            .then((res) => {
                window.localStorage.removeItem('uuid') //removes user id when logging out
                navigate('/')
            })
            .catch((err) => {
                console.error(err);
            })
    }

    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <header className='w-full bg-gray-950 flex flex-row justify-between items-center p-5'>
                <div>
                    <h1 className='text-gray-100 decoration-solid text-6xl italic'>{title}</h1>
                </div>
                <div>
                    <button className='transition ease-in delay-1 duration-1 shadow-lg shadow-myColor-600 bg-myColor-600 hover:bg-myColor-900 hover:shadow-myColor-900 text-myColor-50 font-bold py-2 px-4 rounded mr-3'><Link to={'/recipes'}>Home</Link></button>
                    <button className='transition ease-in delay-1 duration-1 shadow-lg shadow-myColor-600 bg-myColor-600 hover:bg-myColor-900 hover:shadow-myColor-900 text-myColor-50 font-bold py-2 px-4 rounded' onClick={logout}><Link to={'/'}>Logout</Link></button>
                </div>
            </header>
        </div>
    )
}

export default Nav;