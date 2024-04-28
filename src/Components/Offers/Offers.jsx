import React, { useEffect } from 'react';
import 'animate.css';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Offers = () => {
    useEffect (() =>{
        Aos.init();

    })
    return (
        <div className='container mx-auto mb-24  'data-aos ="fade-down">
            <h1 className='font-bold text-3xl text-center p-1'>Offers</h1>
            <p className='font-semibold text-center mb-3 p-1'>Promotions, deals and special offers for you</p>
            <div className='flex lg:flex-row flex-col gap-6 lg:ml-0 md:ml-32 ml-5'>
              
              <div className='flex  lg:w-[50%] w-2/3 lg:h-40 h-52 border rounded-2xl'>
                <div className='p-1'>
                   <h1 className=' lg:text-2xl text-xm font-semibold '>Planning a trip to the 2024 Summer Games?</h1>
                   <p className='mb-1 lg:text-xm text-sm'>Brussels is a quick train ride from all the action</p>
                   <button className="btn btn-primary">Explore Now</button>

                </div>
                <img className='lg:w-full lg:h-full w-[50%] h-full' src="https://img.traveltriangle.com/blog/wp-content/uploads/2017/10/shutterstock_2773329831.jpg" alt="" />
              </div>
              <div className='flex lg:flex-row flex-col-reverse lg:w-[50%] w-2/3 lg:h-40 h-52 border rounded-2xl '>

              <div className="hero rounded-2xl w-full h-full" style={{backgroundImage: 'url(https://www.shutterstock.com/image-photo/traveler-woman-on-vacation-beach-260nw-2337247967.jpg)'}}>
  <div className=" bg-opacity-70 bg-gradient-to-r from-indigo-500 ..."></div>
  <div className="hero-content  text-neutral-content">
    <div className="text-start text-white">
    <h1 className='text-2xl font-semibold '>Seize the moment
</h1>
                   <p className='mb-1'>Save 15% or more when you book and stay before 1 October 2024</p>
                   <button className="btn btn-primary">Find Getaway Deals </button>
    </div>
  </div>
</div>



                {/* <div style={{backgroundImage: 'url(https://www.shutterstock.com/image-photo/traveler-woman-on-vacation-beach-260nw-2337247967.jpg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                   
                </div>
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1> */}
              </div>
          

            </div>
        </div>
    );
};

export default Offers;