import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const addedSpots = useLoaderData();
    return (
        <div>
            <h1>Location: {addedSpots.length}</h1>
        </div>
    );
};

export default Home;