import React, { useState, useEffect } from 'react';
import useCheckEvenNumber from './logic';

export function RandomNumber() {
    const [randomNumber, setNumber] = useState(0);
    const isEven = useCheckEvenNumber(randomNumber);

    useEffect(() => {}, [randomNumber]);

    function handleNewRandomNumber() {
        // Get a random number is between 0 - 10
        setNumber(Math.floor(Math.random() * 100));
    }

    return (
        <div>
            <h4>Component 2:</h4>
            <p>Random number: {randomNumber}</p>
            <p>Is {randomNumber} an even number? {isEven ? 'yes' : 'no'}</p>
            <button onClick={() => handleNewRandomNumber()}>
                Get random number
            </button>
        </div>
    );
}
