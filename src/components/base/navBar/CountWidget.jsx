import React, {useState, useEffect} from 'react';

export default function CountWidget({count}) {
    return (
        <p className='number-cart-added'>{count}</p>
    );
};
