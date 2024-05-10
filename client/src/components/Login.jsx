import React, { useContext, useState } from 'react';
import axios from 'axios';
import Nav from '../components/Nav'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../contexts/userContext';

const Login = (props) => {
    const {user, setUser, setIdInLocal } = useContext(userContext);
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        email: '',
        password: '',
    })
    const [register, setRegister] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    //error for login; only displays one validation when either login input is incorrect
    const [error, setError] = useState([])
    //errors for registration; displaying one validation for each reg input
    const [errors, setErrors] = useState([])


    // login on submit
    const loginHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', login, { withCredentials: true })
            .then((res) => {
                setUser(res.data)
                setIdInLocal(res.data._id) //setting id in local storage
                navigate('/recipes')
            })
            .catch((err) => {
                console.log(err);
                setError(err.response.data.message);
            })
    }
    //login states handler
    const loginChangeHandler = (e) => {
        setLogin((prevValue) => ({
            ...prevValue,
            [e.target.name]: e.target.value
        }))
    }

    //register on submit
    const registerHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', register, { withCredentials: true })
            .then((res) => {
                console.log(res.data);
                setUser(res.data)
                setIdInLocal(res.data._id) //setting id in local storage
                navigate('/recipes')
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            })
    }
    //registration states handler
    const regChangeHandler = (e) => {
        setRegister((prevValue) => ({
            ...prevValue,
            [e.target.name]: e.target.value
        }))
    }


    return (
        <div className='flex flex-col justify-center items-center'>
            <header className='w-full bg-gray-950 flex flex-row justify-between items-center p-5'>
                <div>
                    <h1 className='text-gray-100 decoration-solid text-6xl italic' >Recipe Saver</h1>
                </div>
            </header>
            <div className='flex w-full justify-around items-start bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%' style={{ height: '100vh' }}>
                <form className='w-full max-w-xl mt-10 bg-gray-500 shadow-2xl shadow-gray-950 p-10' onSubmit={loginHandler}>
                    <div className='md:flex md:items-center mb-6'>
                        <h1 className='text-4xl text-gray-100 font-bold md:text-right mb-1 md:mb-5 pr-4'>Login</h1>
                    </div>
                    <div>
                        {
                            error &&
                            <p className='text-red-200'>{error}</p>
                        }
                    </div>
                    <div className='md:flex md:items-center mb-6'>
                        <div className='md:w-1/3' >
                            <label className='block text-gray-100 font-bold md:text-right mb-1 md:mb-0 pr-4' htmlFor='email'>Email:</label>
                        </div>
                        <div className='md:w-2/3'>
                            <input className='bg-gray-100 appearance-none border-2 border-gray-50 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800'
                                type='text'
                                name='email'
                                id='email'
                                onChange={(e) => loginChangeHandler(e)}
                                value={login.email}
                            />
                        </div>
                    </div >
                    <div className='md:flex md:items-center mb-6'>
                        <div className='md:w-1/3' >
                            <label className='block text-gray-100 font-bold md:text-right mb-1 md:mb-0 pr-4' htmlFor='password'>Password:</label>
                        </div>
                        <div className='md:w-2/3'>
                            <input className='bg-gray-100 appearance-none border-2 border-gray-50 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800'
                                type='password'
                                name='password'
                                onChange={(e) => loginChangeHandler(e)}
                                value={login.password}
                            />
                        </div>
                    </div>
                    <div className='md:flex md:items-center'>
                        <div className='md:w-1/3'></div>
                        <div className='md:w-2/3'>
                            <button className='shadow-lg shadow-myColor-600 bg-myColor-600 hover:bg-myColor-900 hover:shadow-myColor-900 text-myColor-50 font-bold py-2 px-4 rounded mr-3' >Login</button>
                        </div>
                    </div >
                </form >
                <form className='w-full max-w-xl mt-10 bg-gray-500 shadow-2xl shadow-gray-950 p-10' onSubmit={registerHandler}>
                    <div className='md:flex md:items-center mb-6'>
                        <h1 className='text-4xl text-gray-100 font-bold md:text-right mb-1 md:mb-5 pr-4'>Register</h1>
                    </div>
                    <div className='md:flex md:items-center mb-6'>
                        <div className='md:w-1/3' >
                            <label className='block text-gray-100 font-bold md:text-right mb-1 md:mb-0 pr-4' htmlFor='firstName'>First Name:</label>
                        </div>
                        <div className='md:w-2/3'>
                            <input className='bg-gray-100 appearance-none border-2 border-gray-50 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800'
                                type='text'
                                name='firstName'
                                onChange={(e) => regChangeHandler(e)}
                                value={register.firstName}
                            />
                        </div>
                        {
                            errors.firstName ?
                                <p className='text-red-200'>{errors.firstName.message}</p> : null
                        }
                    </div >
                    <div className='md:flex md:items-center mb-6'>
                        <div className='md:w-1/3' >
                            <label className='block text-gray-100 font-bold md:text-right mb-1 md:mb-0 pr-4' htmlFor='lastName'>Last Name:</label>
                        </div>
                        <div className='md:w-2/3'>
                            <input className='bg-gray-100 appearance-none border-2 border-gray-50 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800'
                                type='text'
                                name='lastName'
                                onChange={(e) => regChangeHandler(e)}
                                value={register.lastName}
                            />
                        </div>
                        {
                            errors.lastName ?
                                <p className='text-red-200'>{errors.lastName.message}</p> : null
                        }
                    </div>
                    <div className='md:flex md:items-center mb-6'>
                        <div className='md:w-1/3' >
                            <label className='block text-gray-100 font-bold md:text-right mb-1 md:mb-0 pr-4' htmlFor='email'>Email:</label>
                        </div>
                        <div className='md:w-2/3'>
                            <input className='bg-gray-100 appearance-none border-2 border-gray-50 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800'
                                type='text'
                                name='email'
                                onChange={(e) => regChangeHandler(e)}
                                value={register.email}
                            />
                        </div>
                        {
                            errors.email ?
                                <p className='text-red-200'>{errors.email.message}</p> : null
                        }
                    </div>
                    <div className='md:flex md:items-center mb-6'>
                        <div className='md:w-1/3' >
                            <label className='block text-gray-100 font-bold md:text-right mb-1 md:mb-0 pr-4' htmlFor='password'>Password:</label>
                        </div>
                        <div className='md:w-2/3'>
                            <input className='bg-gray-100 appearance-none border-2 border-gray-50 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800'
                                type='password'
                                name='password'
                                onChange={(e) => regChangeHandler(e)}
                                value={register.password}
                            />
                        </div>
                        {
                            errors.password ?
                                <p className='text-red-200'>{errors.password.message}</p> : null
                        }
                    </div> <div className='md:flex md:items-center mb-6'>
                        <div className='md:w-1/3' >
                            <label className='block text-gray-100 font-bold md:text-right mb-1 md:mb-0 pr-4' htmlFor='confirmPassword'>Confirm Password:</label>
                        </div>
                        <div className='md:w-2/3'>
                            <input className='bg-gray-100 appearance-none border-2 border-gray-50 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800'
                                type='password'
                                name='confirmPassword'
                                onChange={(e) => regChangeHandler(e)}
                                value={register.confirmPassword}
                            />
                        </div>
                        {
                            errors.confirmPassword ?
                                <p className='text-red-200'>{errors.confirmPassword.message}</p> : null
                        }
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