import React, { useState } from 'react';
import axios from 'axios';
import Nav from './Nav'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {


    return (
        <div className='flex flex-col justify-center items-center'>
            <header className='w-full bg-gray-950 flex flex-row justify-between items-center p-5' >
                <div>
                    <h1 className='text-gray-100 decoration-solid text-6xl italic' >Recipe Options</h1>
                </div>
            </header>
            <div className='flex w-full justify-around items-start bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%' style={{ height: '100vh' }}>
                <form className='w-full max-w-xl mt-10 bg-gray-500 shadow-2xl shadow-gray-950 p-10'>
                    <div className='md:flex md:items-center mb-6'>
                        <h1 className='text-4xl text-gray-100 font-bold md:text-right mb-1 md:mb-5 pr-4'>Login</h1>
                    </div>
                    <div className='md:flex md:items-center mb-6'>
                        <div className='md:w-1/3' >
                            <label className='block text-gray-100 font-bold md:text-right mb-1 md:mb-0 pr-4' >Email:</label>
                        </div>
                        <div className='md:w-2/3'>
                            <input className='bg-gray-100 appearance-none border-2 border-gray-50 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800' />
                        </div>
                    </div >
                    <div className='md:flex md:items-center mb-6'>
                        <div className='md:w-1/3' >
                            <label className='block text-gray-100 font-bold md:text-right mb-1 md:mb-0 pr-4' >Password:</label>
                        </div>
                        <div className='md:w-2/3'>
                            <input className='bg-gray-100 appearance-none border-2 border-gray-50 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800' />
                        </div>
                    </div>
                    <div className='md:flex md:items-center'>
                        <div className='md:w-1/3'></div>
                        <div className='md:w-2/3'>
                            <button className='shadow-lg shadow-myColor-600 bg-myColor-600 hover:bg-myColor-900 hover:shadow-myColor-900 text-myColor-50 font-bold py-2 px-4 rounded mr-3' >Login</button>
                        </div>
                    </div >
                </form >
                <form className='w-full max-w-xl mt-10 bg-gray-500 shadow-2xl shadow-gray-950 p-10'>
                    <div className='md:flex md:items-center mb-6'>
                        <h1 className='text-4xl text-gray-100 font-bold md:text-right mb-1 md:mb-5 pr-4'>Register</h1>
                    </div>
                    <div className='md:flex md:items-center mb-6'>
                        <div className='md:w-1/3' >
                            <label className='block text-gray-100 font-bold md:text-right mb-1 md:mb-0 pr-4' >First Name:</label>
                        </div>
                        <div className='md:w-2/3'>
                            <input className='bg-gray-100 appearance-none border-2 border-gray-50 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800' />
                        </div>
                    </div >
                    <div className='md:flex md:items-center mb-6'>
                        <div className='md:w-1/3' >
                            <label className='block text-gray-100 font-bold md:text-right mb-1 md:mb-0 pr-4' >Last Name:</label>
                        </div>
                        <div className='md:w-2/3'>
                            <input className='bg-gray-100 appearance-none border-2 border-gray-50 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800' />
                        </div>
                    </div>
                    <div className='md:flex md:items-center mb-6'>
                        <div className='md:w-1/3' >
                            <label className='block text-gray-100 font-bold md:text-right mb-1 md:mb-0 pr-4' >Email:</label>
                        </div>
                        <div className='md:w-2/3'>
                            <input className='bg-gray-100 appearance-none border-2 border-gray-50 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800' />
                        </div>
                    </div>
                    <div className='md:flex md:items-center mb-6'>
                        <div className='md:w-1/3' >
                            <label className='block text-gray-100 font-bold md:text-right mb-1 md:mb-0 pr-4' >Password:</label>
                        </div>
                        <div className='md:w-2/3'>
                            <input className='bg-gray-100 appearance-none border-2 border-gray-50 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800' />
                        </div>
                    </div> <div className='md:flex md:items-center mb-6'>
                        <div className='md:w-1/3' >
                            <label className='block text-gray-100 font-bold md:text-right mb-1 md:mb-0 pr-4' >Confirm Password:</label>
                        </div>
                        <div className='md:w-2/3'>
                            <input className='bg-gray-100 appearance-none border-2 border-gray-50 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800' />
                        </div>
                    </div>
                    <div className='md:flex md:items-center'>
                        <div className='md:w-1/3'></div>
                        <div className='md:w-2/3'>
                            <button className='shadow-lg shadow-myColor-600 bg-myColor-600 hover:bg-myColor-900 hover:shadow-myColor-900 text-myColor-50 font-bold py-2 px-4 rounded mr-3' >Register</button>
                        </div>
                    </div >
                </form >
            </div>
        </div >
    )
}

export default Login;