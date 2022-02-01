import React, { useRef } from 'react'
import '../02-useEffect/effect.css';

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        console.log(inputRef);
        inputRef.current.select();
    }

    return (
        <div>
            <h1>focus screen</h1>
            <hr/>

            <input 
                type="text"
                ref={inputRef}
                className={'form-control'}
                placeholder={'algo bonito '}
            />

            <button 
                className='btn btn-outline-primary mt-4'
                onClick={ handleClick }
            >
                focus
            </button>
        </div>
    )
}
