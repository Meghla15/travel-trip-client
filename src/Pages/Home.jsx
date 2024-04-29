import Aos from 'aos';
import 'aos/dist/aos.css'
import Banner from '../Components/Banner';
import HomeCard from '../Components/HomeSectionCard/HomeCard';
import Offers from '../Components/Offers/Offers';
import TrendingDestination from '../Components/TrendingDestination/TrendingDestination';
import { useEffect } from 'react';
import TypeWriterSection from '../Components/TypewriterSection/TypeWriterSection';
import { tabTitle } from '../Components/DynamicRoute/FunctionTitle';



const Home = () => {
    tabTitle  ("Travel Trip")
    useEffect (() =>{
        Aos.init();

    })
    return (
        <div className='' data-aos ="fade-right"  >
            
            <Banner></Banner>
            <HomeCard></HomeCard>
            <TrendingDestination></TrendingDestination>
            <Offers></Offers>
            <TypeWriterSection></TypeWriterSection>
            
         
        </div>
    );
};

export default Home;