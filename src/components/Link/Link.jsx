import React from 'react';

const Link = ({ route }) => {
    return (
        <li className='mr-5 hover:bg-purple-800'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;