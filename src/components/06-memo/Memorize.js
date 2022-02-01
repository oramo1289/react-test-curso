import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

import '../02-useEffect/effect.css';

export const Memorize = () => {

    const {state, increment} = useCounter(10);
    const [show, setShow] = useState(false)
    return (
        <div>
            <h1>Counter: <Small value={ state }/> </h1>
            <hr/>

            <button
                className='btn btn-primary'
                onClick={() => increment(1)}
            >
                increment
            </button>

            <button
                className='btn btn-outline-primary ms-4'
                onClick={() => setShow(!show)}
            >
                show/hide {JSON.stringify(show)}
            </button>

        </div>
    )
}
