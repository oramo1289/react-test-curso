import React, { useCallback, useEffect, useState } from 'react'

import '../02-useEffect/effect.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {


    const [counter, setCounter] = useState(1)

    const increment = useCallback(
        (num) => {
            setCounter(prevState => prevState + num)
        },
        [setCounter],
    )

    useEffect(() => {
        // ?? este es un uso para que no vuelva a generar la funcion con un useEffect
    }, [setCounter])

    return (
        <div>
            <h1>Callback Hook: {counter}</h1>
            <hr/>
            
            <ShowIncrement increment={increment}/>
        </div>
    )
}
