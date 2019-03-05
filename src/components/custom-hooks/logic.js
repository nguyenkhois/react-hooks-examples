import React, { useState, useEffect } from 'react';

// Custom Hook for the logic sharing among many components
function useCheckEvenNumber(inputNumber) {
    const [isEvenNumber, setEvenNumber] = useState(false);

    useEffect(() => {
        if (inputNumber % 2 === 0) {
            setEvenNumber(true);
        } else {
            setEvenNumber(false);
        }
    });

    return isEvenNumber;
}

export default useCheckEvenNumber;