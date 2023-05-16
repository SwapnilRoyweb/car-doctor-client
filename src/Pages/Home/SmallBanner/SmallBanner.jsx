import React from 'react';
import { FaCalendarTimes, FaPhoneAlt, FaLocationArrow } from 'react-icons/fa';

const SmallBanner = () => {
    return (
        <div className='my-10 bg-black text-white p-10 rounded-lg flex justify-around'>
            <div className='flex gap-3 items-center'>
                <FaCalendarTimes />
                <div>
                    <p>We are open monday-friday</p>
                    <h3 className='font-bold text-xl'>7.00am - 9.00pm</h3>
                </div>
            </div>
            <div className='flex gap-3 items-center'>
                <FaPhoneAlt />
                <div>
                    <p>Have a Question?</p>
                    <h3 className='font-bold text-xl'>+2546 251 2658   </h3>
                </div>
            </div>
            <div className='flex gap-3 items-center'>
                <FaLocationArrow />
                <div>
                    <p>Need a repair? our address</p>
                    <h3 className='font-bold text-xl'>Liza street, New York</h3>
                </div>
            </div>
        </div>
    );
};

export default SmallBanner;