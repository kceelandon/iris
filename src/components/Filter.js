import React from 'react';

export const Filter = ({value, handleChange}) => {
    return (
        <div>
            Search <input value={value} onChange={handleChange}/>
        </div>
    )
};