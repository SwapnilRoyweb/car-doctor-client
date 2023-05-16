import React from 'react';
import img from '../../assets/images/login/login.svg'
import { FaGooglePlusG, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Signup = () => {

    const handleSignUp = event => {
        event.preventDefault();
    }

    return (
        <div className="hero min-h-full p-10 bg-gray-200 my-10 rounded-xl">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-10">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-4xl font-bold text-center text-white">Sign Up now!</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="Confirm Password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value='Sign Up' className='btn btn-error text-white' />
                            </div>
                        </form>
                        <div className='text-white text-center'>
                            <p>or sign up with</p>
                            <div className='flex justify-center gap-5 my-3'>
                                <button className='btn btn-ghost btn-active btn-circle'><FaGooglePlusG /></button>
                                <button className='btn btn-ghost btn-active btn-circle'><FaFacebook /></button>
                                <button className='btn btn-ghost btn-active btn-circle'><FaLinkedin /></button>
                            </div>
                            <p>Already have an account? <Link to='/login' className='text-red-500 font-bold'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;