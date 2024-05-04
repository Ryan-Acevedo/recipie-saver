import { Link } from "react-router-dom";

const Unauthorized = (props) => {


    return (
        <div className="">
            <h1 className='text-6xl' >Unauthorized</h1>
            <Link to={'/'}><button className="">Login or Register</button></Link>
        </div>
    )
}

export default Unauthorized;