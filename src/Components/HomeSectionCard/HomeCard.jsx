import { useLoaderData } from 'react-router-dom';
import HomeSectionCard from './HomeSectionCard';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const HomeCard = () => {
    const addedSpots = useLoaderData();
    console.log(addedSpots)
    useEffect (() =>{
        Aos.init();

    })
   
    return (
        <div className='mb-20'>
        <h1 className="lg:text-4xl text-3xl font-bold text-center lg:mt-10 mt-6 font-acme ">Tourist Spots</h1>
        <p className='w-2/3 text-center mx-auto'>
Travel is the act of moving from one place to another, whether across town, across a country, or to distant lands. It's an activity that embodies adventure, discovery, and a break from the routine. The concept of travel has captivated humans for centuries, inspiring explorers, writers, and wanderers to venture beyond their familiar surroundings. Here's a deeper look into what travel represents, why people do it, and its broader impact.</p>

        <div className='container px-5 md:px-0 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 lg:mt-10 mt-6  ' data-aos ="fade-up" >
        {
                addedSpots.slice(0,6).map(addedSpot => <HomeSectionCard
                key={addedSpot._id}
                addedSpot ={addedSpot}
                ></HomeSectionCard>)
            }
        
           

        </div>
    </div>
    );
};

export default HomeCard;