import { CheckCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';


const Feature = ({ feature }) => {
    return (
        <div className='flex items-center '>
            <CheckCircleIcon className='h-4 w-4 text-purple-700' />
            <span className='pl-2'>{feature}</span>
        </div>
    );
};

export default Feature;