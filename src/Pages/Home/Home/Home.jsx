import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Services from '../Services/Services';
import SmallBanner from '../SmallBanner/SmallBanner';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <SmallBanner></SmallBanner>
            <Team></Team>
            <Features></Features>
        </div>
    );
};

export default Home;