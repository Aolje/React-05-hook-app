import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { loading, data } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0];

    console.log(data);


    return (
        <div>
            <h1>BreakinBad Quotes</h1>
            <hr />

            {
                loading
                    ?
                    (
                        <div className="alert alert-info text-center">
                            loading...
                        </div>
                    )
                    :
                    (
                        <blockquote className="blockquote text-right">
                            <p className="mb-3"> {quote}</p>
                            <footer className="blockquote-footer"> {author} </footer>
                        </blockquote>
                    )
            }

            <button
                className='btn btn-primary'
                onClick={increment}
            >
                Next quote
            </button>





        </div>
    )
}