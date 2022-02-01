import React, { useContext } from 'react'
import { UserContext } from './UserContext'


export const LoginScreen = () => {

    const {user, setUser} = useContext(UserContext);

    return (
        <div>
            <h1>Login App</h1>

            <pre>{JSON.stringify(user, null, 3)}</pre>
            <button
                onClick={() => setUser({
                    id:1234,
                    name:'Oscar',
                    email:'cosa@gmail.com'
                })}
            >click me</button>
        </div>
    )
}
