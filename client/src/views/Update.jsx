import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Nav from '../components/Nav'
import { useNavigate, useParams } from 'react-router-dom'
import { userContext } from '../contexts/userContext';

const Update = (props) => {
    const {user, setUser} = useContext(userContext);
    const { id } = useParams("")
    const navigate = useNavigate("")
    const [errors, setErrors] = useState({})
    const [getter, setter] = useState({
        name: "",
        cookTime: "",
        directions: "",
    })

    // setUser and authentication
    useEffect(() => {
        axios.get('http://localhost:8000/api/user', { withCredentials: true })
            .then((res) => {
                console.log(res.data);
                setUser(res.data)
            })
            .catch((err) => {
                navigate('/unauthorized')
                console.log(err);
            })
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipes/${id}`)
            .then((res) => {
                setter({
                    name: res.data.name,
                    cookTime: res.data.cookTime,
                    directions: res.data.directions,
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const changeHandler = (e) => {
        setter((prevValue) => ({
            ...prevValue,
            [e.target.name]: e.target.value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/recipes/${id}`, getter)
            .then((res) => {
                navigate(`/recipes/${res.data._id}/details`)
            })
            .catch((err) => {
                setErrors(err.response.data.errors)
            })
    }

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/recipes/${id}`)
            .then((res) => {
                navigate('/recipes')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <Nav title={`Update ${getter.name} Recipe`} />
            <div className='flex flex-col w-full justify-start items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%' style={{ height: '100vh' }}>
                <form className='w-full max-w-xl mt-10 bg-gray-500 shadow-2xl shadow-gray-950 p-10' onSubmit={submitHandler}>
                    <div className='md:flex md:items-center mb-6'>
                        <div className='md:w-1/3' >
                            <label className='block text-gray-100 font-bold md:text-right mb-1 md:mb-0 pr-4'>Recipe Name:</label>
                        </div>
                        <div className='md:w-2/3'>
                            <input className='bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800' type="text" name="name" value={getter.name} onChange={(e) => changeHandler(e)} />
                            {
                                errors.name ?
                                    <p className='text-red-200'>{errors.name.message}</p> :
                                    null
                            }
                        </div>
                    </div>
                    <div className='md:flex md:items-center mb-6'>
                        <div className='md:w-1/3'>
                            <label className='block text-gray-100 font-bold md:text-right mb-1 md:mb-0 pr-4' >Cook Time in Minutes:</label>
                        </div>
                        <div className='md:w-2/3'>
                            <input className='bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800' type="number" name="cookTime" value={getter.cookTime} onChange={(e) => changeHandler(e)} />
                            {
                                errors.cookTime ?
                                    <p className='text-red-200'>{errors.cookTime.message}</p> :
                                    null
                            }
                        </div>
                    </div>
                    <div className='md:flex md:items-center mb-6'>
                        <div className='md:w-1/3'>
                            <label className='block text-gray-100 font-bold md:text-right mb-1 md:mb-0 pr-4' >Directions:</label>
                        </div>
                        <div className='md:w-2/3'>
                            <textarea className='bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800' type="text" rows={10} name="directions" value={getter.directions} onChange={(e) => changeHandler(e)} />
                            {
                                errors.directions ?
                                    <p className='text-red-200'>{errors.directions.message}</p> :
                                    null
                            }
                        </div>
                    </div>
                    <div className='md:flex md:items-center'>
                        <div className='md:w-1/3'></div>
                        <div className='md:w-2/3 flex justify-between'>
                            <button className='transition ease-in delay-1 duration-1 shadow-lg shadow-myColor-600 bg-myColor-600 hover:bg-myColor-900 hover:shadow-myColor-900 text-myColor-50 font-bold py-2 px-4 rounded mr-3'>Save</button>
                            <button className='transition ease-in delay-1 duration-1 shadow-lg shadow-red-600 shadow bg-red-600 hover:bg-red-900 hover:shadow-red-900 text-myColor-50 font-bold py-2 px-4 rounded' onClick={deleteHandler} >Delete</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Update;