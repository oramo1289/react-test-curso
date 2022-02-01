import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';



export const LayoutEffect = () => {
    
    // const url = 'https://www.breakingbadapi.com/api/characters?limit=10';
    const { state, increment }= useCounter(1);
    const url = `https://www.breakingbadapi.com/api/quotes/${state}`;

    const  { data }  = useFetch(url);
    const { quote } = !!data && data[0];

    const pTag = useRef()
    const [boxSize, setBoxSize] = useState()
    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect())
        setBoxSize(pTag.current.getBoundingClientRect())
    }, [quote])

    return (
        <div>
            <h1>Braking bad quotes</h1>

            {(
                <blockquote className={'blockquote text-end'}>
                    <p ref={pTag} className="mb-0">{data && quote}</p>
                </blockquote>
            )}

            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>
           
            <button 
                className={'btn btn-primary'}
                onClick={() => increment(1)}
            >
                siguiente
            </button>
            {/* <button 
                className={'btn btn-primary'}
                onClick={() => decrement(1)}
            >
                anterior
            </button>
            <button 
                className={'btn btn-primary'}
                onClick={() => reset}
            >
                reset
            </button> */}
        </div>
    )
}
