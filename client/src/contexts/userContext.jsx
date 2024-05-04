import { createContext, useState } from "react";

export const userContext = createContext()

export const UserProvider = (props) => {
    const [user, setUser] = useState({}) 

    const setIdInLocal = (id) => {
        window.localStorage.setItem('uuid', id)
    }
    return (
        <userContext.Provider value={{user, setUser, setIdInLocal}}> 
            {props.children}
        </userContext.Provider>
    )
}