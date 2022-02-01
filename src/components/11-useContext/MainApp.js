import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {
    
    const [user, setUser] = useState({})
    const User = {
        user,
        setUser
    }

    return (
        <UserContext.Provider value={ User } >
            <AppRouter />
        </UserContext.Provider>
    )
}
