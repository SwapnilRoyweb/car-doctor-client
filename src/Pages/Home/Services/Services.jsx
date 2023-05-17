import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className='my-5 flex flex-col items-center'>
            <div className='text-center space-y-3'>
                <h3 className='text-lg text-orange-600 font-semibold'>Our Services</h3>
                <h2 className='text-5xl font-bold'>Our Service Area</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-5 mt-5'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;