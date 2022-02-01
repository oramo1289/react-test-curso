import React, { useState } from 'react';
import '../02-useEffect/effect.css';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RealExampleRef = () => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr/>
            
            {show && (
                <MultipleCustomHooks />
            )}

            <button 
                className='btn btn-primary'
                onClick={() => setShow( !show)}
            >
                show/hide
            </button>
        </div>
    )
}
