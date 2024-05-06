import { Link } from "react-router-dom";

const Unauthorized = (props) => {


    return (
        <div className='flex flex-col justify-center items-center'>
            <header className='w-full bg-gray-950 flex flex-row justify-between items-center p-5' >
                <div>
                    <h1 className='text-gray-100 decoration-solid text-6xl italic' >Unathorized</h1>
                </div>
                <div>
                    {
                        window.localStorage.getItem('uuid') ?
                            <button className='transition ease-in delay-1 duration-1 shadow-lg shadow-myColor-600 bg-myColor-600 hover:bg-myColor-900 hover:shadow-myColor-900 text-myColor-50 font-bold py-2 px-4 rounded mr-3'><Link to={'/recipes'}><button className="">Go back to recipes</button></Link></button> :
                            <button className='transition ease-in delay-1 duration-1 shadow-lg shadow-myColor-600 bg-myColor-600 hover:bg-myColor-900 hover:shadow-myColor-900 text-myColor-50 font-bold py-2 px-4 rounded' ><Link to={'/'}><button className="">Login or Register</button></Link></button>
                    }
                </div>
            </header>
            <div className='flex flex-col w-full justify-start items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%' style={{ height: '100vh' }}>
                <div className='m-8 bg-myColor-50 p-5 shadow-2xl shadow-gray-950' >
                    <h2 className='text-red-600 text-4xl mb-4'>Unathorized: Access is denied due to invalid credentials.</h2>
                    <h2 className='text-myColor-900 text-4xl mb-4'>You do not have permission to view this page. Please login or register to continue.</h2>
                </div>
            </div>
        </div>
    )
}

export default Unauthorized;
