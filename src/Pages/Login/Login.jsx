import React from 'react';
import img from '../../assets/images/login/login.svg'
import { FaGooglePlusG, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2'
import { useState } from 'react';

const Login = () => {
    const [error, setError] = useState(' ');

    const { signIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;

                const loggedUser = {
                    email: user.email
                }
                console.log(loggedUser);
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                .then(res => res.json())
                .then(data => {
                    console.log('jwt response', data);
                    // warning: Local storage is not good and secure
                    localStorage.setItem('car-access-token', data.token)
                })

                Swal.fire({
                    title: 'Sign In',
                    text: 'User Login Successfully',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                })
                navigate(from, { replace: true });
                form.reset();
                setError('');
            })
            .catch(error => {
                console.log(error)
                setError(error.message);
            })
    }

    return (
        <div className="hero min-h-full p-10 bg-gray-200 my-10 rounded-xl">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-10">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-4xl font-bold text-center text-white">Login now!</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered text-white" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered text-white" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <p className='text-red-500 text-center'>{error}</p>
                            <div className="form-control mt-6">
                                <input type="submit" value='Login' className='btn btn-error text-white' />
                            </div>
                        </form>
                        <div className='text-white text-center'>
                            <p>or sign in with</p>
                            <div className='flex justify-center gap-5 my-3'>
                                <button className='btn btn-ghost btn-active btn-circle'><FaGooglePlusG /></button>
                                <button className='btn btn-ghost btn-active btn-circle'><FaFacebook /></button>
                                <button className='btn btn-ghost btn-active btn-circle'><FaLinkedin /></button>
                            </div>
                            <p>Don't have an account? <Link to='/signUp' className='text-red-500 font-bold'>Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;