import React, { useState } from 'react';
import '../02-useEffect/effects.css';


import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';

export const Memorize = () => {

  const { counter, increment } = useCounter(10);

  const [show, setShow] = useState(true)
  return (
    <div>
      <h1>Memorize</h1>
      <h2>Counter: <Small value={counter} /></h2>
      <hr />

      <button className='btn btn-primary m-3' onClick={increment}>+1</button>

      <button className="btn btn-outline-primary"
        onClick={() => {
          setShow(!show);
        }}
      >
        show/hide
      </button>
    </div>
  )
}
