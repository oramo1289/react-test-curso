import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effect.css';



export const MultipleCustomHooks = () => {
    
    // const url = 'https://www.breakingbadapi.com/api/characters?limit=10';
    const { state, increment }= useCounter(1);
    const url = `https://www.breakingbadapi.com/api/quotes/${state}`;

    const  {data,loading}  = useFetch(url);
    const {quote, author} = !!data && data[0];

    return (
        <div>
            <h1>Braking bad quotes</h1>

            {loading && (
                <div className={'alert alert-info tex-center'}>
                    ...loading
                </div>
            )}

            {!loading && (
                <blockquote className={'blockquote text-end'}>
                    <p className="mb-0">{data && quote}</p>
                    <footer className="blockquote-footer mt-1">{data && author}</footer>
                </blockquote>
            )}

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
