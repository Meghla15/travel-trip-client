import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeSectionCard from './HomeSectionCard';

const HomeCard = () => {
    const addedSpots = useLoaderData();
   
    return (
        <div className='mb-20'>
        <h1 className="lg:text-4xl text-3xl font-bold text-center lg:mt-10 mt-6 font-neon ">Tourist Sport</h1>

        <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 lg:mt-10 mt-6  animate__animated animate__bounceInLeft' >
        {
                addedSpots.map(addedSpot => <HomeSectionCard
                key={addedSpot._id}
                addedSpot ={addedSpot}
                ></HomeSectionCard>)
            }
        
           

        </div>
    </div>
    );
};

export default HomeCard;