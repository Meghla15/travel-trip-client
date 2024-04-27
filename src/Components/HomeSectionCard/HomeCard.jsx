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
        <h1 className="lg:text-4xl text-3xl font-bold text-center lg:mt-10 mt-6 font-neon ">Tourist Spots</h1>

        <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 lg:mt-10 mt-6  ' data-aos ="fade-up" >
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