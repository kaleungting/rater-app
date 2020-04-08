import React from 'react';

const Errors = ({errors}) => (
    <ul>
        {errors.map((error,i) => {
            return <li key={`${error}-${i}`}>{error}</li>
        })}
    </ul>
)

export default Errors;