import React, { useContext, useEffect, useState } from 'react';
import Nav from '../components/Nav';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { userContext } from '../contexts/userContext';
import  Timer  from '../components/Timer'

const RecipeDetails = (props) => {
    const {user, setUser} = useContext(userContext);
    const [recipe, setRecipe] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipes/${id}`)
            .then((res) => {
                console.log(res.data);
                setRecipe(res.data)
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
        <div>
            <Nav title={`${recipe.name}`} />
            <div className='flex flex-col w-full justify-start bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%' style={{ height: '100vh' }}>
                <div className='m-8 bg-myColor-50 p-5 shadow-2xl shadow-gray-950' >
                    <h2 className='text-myColor-900 text-4xl mb-4'>Description:</h2>
                    <h3 className='ml-4 text-xl underline decoration-myColor-950'>Cook Time: {recipe.cookTime} minutes</h3>
                    <h3 className='ml-4 text-xl'>Directions:</h3>
                    <h4 className='ml-8 mb-8'>{recipe.directions}</h4>
                    <p>Posted by:</p>
                    {
                        recipe.user?
                        <p>{recipe.user.firstName}</p>:
                        <p>no user</p>
                    }
                </div>
                <div className='ml-8'>
                    {
                        recipe.cookTime&&
                        <Timer time={recipe.cookTime}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default RecipeDetails