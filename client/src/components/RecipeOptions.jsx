import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../contexts/userContext';

const recipesOptions = (props) => {
    const navigate = useNavigate();
    const {user, setUser} = useContext(userContext);
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/recipes')
            .then((res) => {
                setRecipes(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

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

    return (
        <div className='flex flex-col justify-center items-center'>
            
            <header className='w-full bg-gray-950 flex flex-row justify-between items-center p-5' >
                <div>
                    <h1 className='text-gray-100 decoration-solid text-6xl italic' >Recipe Options</h1>
                </div>
                <div>
                    <button className='transition ease-in delay-1 duration-1 shadow-lg shadow-myColor-600 bg-myColor-600 hover:bg-myColor-900 hover:shadow-myColor-900 text-myColor-50 font-bold py-2 px-4 rounded mr-3'><Link to={'/recipes/create'}>Add Recipes</Link></button>
                    <button className='transition ease-in delay-1 duration-1 shadow-lg shadow-myColor-600 bg-myColor-600 hover:bg-myColor-900 hover:shadow-myColor-900 text-myColor-50 font-bold py-2 px-4 rounded' ><Link to={'/'}>Logout</Link></button>
                </div>
            </header>
            <div className='flex flex-col w-full justify-start items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%' style={{ height: '100vh' }}>
                <table className='shadow-2xl shadow-gray-950 table w-4/5 border-collapse border border-slate-500 text-left mt-8'>
                    <thead>
                        <tr className='bg-myColor-600 text-myColor-50'>
                            <th className='border border-myColor-200'>Recipes</th>
                            <th className='border border-myColor-200'>Cook Time in Minutes</th>
                            <th className='border border-myColor-200'>Options</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            recipes.map(recipe => (
                                < tr className=' hover:bg-myColor-100 border-2 bg-myColor-50' key={recipe._id}>
                                    <td className='border border-myColor-100'>{recipe.name}</td>
                                    <td className='border border-myColor-100'>{recipe.cookTime}</td>
                                    <td className='border border-myColor-100 text-decoration-line: underline text-blue-600' ><Link to={`/recipes/${recipe._id}/details`}>Details</Link> | <Link to={`/recipes/${recipe._id}/update`}>Edit</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table >
            </div>
        </div >
    )
}

export default recipesOptions;