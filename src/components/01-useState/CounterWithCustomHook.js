import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './Counter.css';

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter(1998);

    const factor = 4;

    return (
        <div>
            <h1>
                Counter With Custom Hook: {state}
            </h1>
            <hr />

            <button onClick={() => increment(factor)} className='btn btn-primary'> + {factor}</button>
            <button onClick={() => decrement(factor)} className='btn btn-danger'> - {factor}</button>
            <button onClick={reset} className='btn btn-info'> reset </button>
        </div>
    )
}
