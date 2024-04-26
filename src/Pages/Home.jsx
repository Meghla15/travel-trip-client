import React from 'react';
import Banner from '../Components/Banner';
import HomeCard from '../Components/HomeSectionCard/HomeCard';
import Offers from '../Components/Offers/Offers';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <HomeCard></HomeCard>
            <Offers></Offers>
         
        </div>
    );
};

export default Home;