import React, { useState, useEffect } from 'react';
import useCheckEvenNumber from './logic';

function NumberStatus() {
    const [count, setCount] = useState(0);
    const isEven = useCheckEvenNumber(count); // Hooks rules - Only call Hooks at the top level

    useEffect(
        () => {
            console.log("custom-hooks.js -> %s", count);
        },
        [count] // Only re-run the effect if count changes
    );

    return (
        <div>
            <p>{count} is an even number? {isEven ? 'yes' : 'no'}</p>
            <button onClick={() => setCount(count + 1)}>
                Check even
            </button>
        </div>
    );
}

export default NumberStatus;