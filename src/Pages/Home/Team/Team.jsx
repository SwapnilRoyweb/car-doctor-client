import React from 'react';
import { FaFacebookF, FaTwitterSquare, FaLinkedin, FaInstagram } from 'react-icons/fa';
import member1 from '../../../assets/images/team/1.jpg'
import member2 from '../../../assets/images/team/2.jpg'
import member3 from '../../../assets/images/team/3.jpg'

const Team = () => {
    return (
        <div className='my-10 flex flex-col items-center'>
            <div className='text-center space-y-3'>
                <h3 className='text-lg text-orange-600 font-semibold'>Team</h3>
                <h2 className='text-5xl font-bold'>Meet our Team</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <div className="card w-96 glass hover:bg-red-100">
                    <figure><img src={member1} alt="car!" /></figure>
                    <div className="card-body text-center">
                        <h2 className="text-2xl font-bold">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className="card-actions justify-center mt-3">
                            <button className="btn btn-circle btn-outline btn-accent"><FaFacebookF/></button>
                            <button className="btn btn-circle btn-outline btn-accent"><FaTwitterSquare/></button>
                            <button className="btn btn-circle btn-outline btn-accent"><FaLinkedin/></button>
                            <button className="btn btn-circle btn-outline btn-accent"><FaInstagram/></button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 glass hover:bg-red-100">
                    <figure><img src={member2} alt="car!" /></figure>
                    <div className="card-body text-center">
                        <h2 className="text-2xl font-bold">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className="card-actions justify-center mt-3">
                            <button className="btn btn-circle btn-outline btn-accent"><FaFacebookF/></button>
                            <button className="btn btn-circle btn-outline btn-accent"><FaTwitterSquare/></button>
                            <button className="btn btn-circle btn-outline btn-accent"><FaLinkedin/></button>
                            <button className="btn btn-circle btn-outline btn-accent"><FaInstagram/></button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 glass hover:bg-red-100">
                    <figure><img src={member3} alt="car!" /></figure>
                    <div className="card-body text-center">
                        <h2 className="text-2xl font-bold">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className="card-actions justify-center mt-3">
                            <button className="btn btn-circle btn-outline btn-accent"><FaFacebookF/></button>
                            <button className="btn btn-circle btn-outline btn-accent"><FaTwitterSquare/></button>
                            <button className="btn btn-circle btn-outline btn-accent"><FaLinkedin/></button>
                            <button className="btn btn-circle btn-outline btn-accent"><FaInstagram/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;