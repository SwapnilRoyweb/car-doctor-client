import React from 'react';
import icon1 from '../../../assets/icons/group.svg';
import icon2 from '../../../assets/icons/Wrench.svg';
import icon3 from '../../../assets/icons/person.svg';
import icon4 from '../../../assets/icons/deliveryt.svg';
import icon5 from '../../../assets/icons/check.svg';
import icon6 from '../../../assets/icons/Group 38729.svg';

const Features = () => {
    return (
        <div className='my-10 flex flex-col items-center justify-center'>
            <div className='text-center space-y-3'>
                <h3 className='text-lg text-orange-600 font-semibold'>Core Features</h3>
                <h2 className='text-5xl font-bold'>Meet our Team</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-10'>
                <div className='bg-red-100 p-5 flex flex-col gap-3 items-center justify-center rounded-2xl hover:bg-red-200'>
                    <img src={icon1} alt="" />
                    <h1 className='font-bold text-lg text-center'>Expert Team</h1>
                </div>
                <div className='bg-red-100 p-5 flex flex-col gap-3 items-center justify-center rounded-2xl hover:bg-red-200'>
                    <img src={icon2} alt="" />
                    <h1 className='font-bold text-lg text-center'>Best Equipment</h1>
                </div>
                <div className='bg-red-100 p-5 flex flex-col gap-3 items-center justify-center rounded-2xl hover:bg-red-200'>
                    <img src={icon3} alt="" />
                    <h1 className='font-bold text-lg text-center'>24/7 Support</h1>
                </div>
                <div className='bg-red-100 p-5 flex flex-col gap-3 items-center justify-center rounded-2xl hover:bg-red-200'>
                    <img src={icon4} alt="" />
                    <h1 className='font-bold text-lg text-center'>Timely Delivery</h1>
                </div>
                <div className='bg-red-100 p-5 flex flex-col gap-3 items-center justify-center rounded-2xl hover:bg-red-200'>
                    <img src={icon5} alt="" />
                    <h1 className='font-bold text-lg text-center'>100% Guaranty</h1>
                </div>
                <div className='bg-red-100 p-5 flex flex-col gap-3 items-center justify-center rounded-2xl hover:bg-red-200'>
                    <img src={icon6} alt="" />
                    <h1 className='font-bold text-lg text-center'>Timely Delivery</h1>
                </div>
            </div>
        </div>
    );
};

export default Features;