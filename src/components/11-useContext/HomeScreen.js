import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {

    const {user, setUser} = useContext(UserContext);
    // const context = useContext(UserContext);
// console.log(context)
    return (
        <div>
            hola mundo

            <pre>{JSON.stringify(user, null, 3)}</pre>
            <button onClick={() => setUser('papa')} >click</button>
        </div>
    )
}
