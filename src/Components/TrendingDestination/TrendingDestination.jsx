import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const TrendingDestination = () => {
    useEffect (() =>{
        Aos.init();

    })
   
    return (
        <div className='mb-20 container mx-auto' data-aos ="fade-right">
            <h1 className='text-center font-acme text-3xl font-bold'>Trending Destination</h1>
            <p className='text-center w-2/3 mx-auto text-xl font-semibold'>Most popular choices for travellers from the World !!</p>

            <div className='flex lg:flex-row flex-col mt-10 justify-around lg:px-20 md:px-20 px-6 gap-2'>
             
              <img className='w-[550px] h-[300px] rounded-2xl ' src="https://av-website-production.s3.ap-southeast-1.amazonaws.com/Global/Location/SajekValley/a3727c4d29334ff58efba1b4ebbdb4da_28487665806_7d888e88bb_k.jpg" alt="" />
              
            
               <img className='w-[550px] h-[300px] rounded-2xl' src="https://img.veenaworld.com/wp-content/uploads/2023/09/Best-Time-to-Visit-Phuket-A-Comprehensive-Guide.jpg" alt="" />
            </div>
            <div className='flex lg:flex-row flex-col lg:px-0 md:px-20 px-6 gap-2 mt-2'>

            <img className='lg:w-[400px] lg:h-[300px] w-[550px] h-[300px] rounded-2xl' src="https://cdn.britannica.com/02/137002-050-0A8A55E7/Thean-Hou-Temple-Kuala-Lumpur-Malaysia.jpg" alt="" />
            <img className='lg:w-[400px] lg:h-[300px] w-[550px] h-[300px] rounded-2xl' src="https://hongngocha.com/wp-content/uploads/2020/02/chua-cau-hoi-an-1.jpg" alt="" />
            <img className='lg:w-[400px] lg:h-[300px] w-[550px] h-[300px] rounded-2xl' src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/02/16101115/angkor-wat-cover.jpeg" alt="" />
            </div>
        </div>
    );
};

export default TrendingDestination;