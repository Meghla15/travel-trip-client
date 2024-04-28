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

            <div className='flex lg:flex-row flex-col mt-10 justify-around px-20 gap-3'>
             
              <img className='w-[550px] h-[300px] rounded-2xl ' src="https://lh3.googleusercontent.com/proxy/EhoJ3B0j9nIqIQO4BkEdU7gvRJScotm9V36Pna1HuMoL_9wgwkFZ2bz1NblxRrJvOb-pKuHepaQZXxyFciLBLeD4Mx35CGpk6EqCt8YA9hqTp2Vz_DZkoVu4jiZb5bLHd6lNfjwqCvETUv3Ki88R1z1rYodO9OoGaEwgCs6ROTVnTMTzvnDXg86T" alt="" />
              
            
               <img className='w-[550px] h-[300px] rounded-2xl' src="https://img.veenaworld.com/wp-content/uploads/2023/09/Best-Time-to-Visit-Phuket-A-Comprehensive-Guide.jpg" alt="" />
            </div>
            <div className='flex lg:flex-row flex-col gap-2 mt-2'>

            <img className='w-[400px] h-[300px] rounded-2xl' src="https://cdn.britannica.com/02/137002-050-0A8A55E7/Thean-Hou-Temple-Kuala-Lumpur-Malaysia.jpg" alt="" />
            <img className='w-[400px] h-[300px] rounded-2xl' src="https://hongngocha.com/wp-content/uploads/2020/02/chua-cau-hoi-an-1.jpg" alt="" />
            <img className='w-[450px] h-[300px] rounded-2xl' src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/02/16101115/angkor-wat-cover.jpeg" alt="" />
            </div>
        </div>
    );
};

export default TrendingDestination;