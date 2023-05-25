import React from 'react';
import { useContext } from 'react';
import { FaGooglePlusG, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';

const SocialLogin = () => {

    const {googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => console.log(error))
    }

    return (
        <div className='text-white'>
            <div className="divider">OR</div>
            <div className='flex justify-center gap-5 my-3'>
                <button className='btn btn-ghost btn-active btn-circle' onClick={handleGoogleSignIn}><FaGooglePlusG /></button>
                <button className='btn btn-ghost btn-active btn-circle'><FaFacebook /></button>
                <button className='btn btn-ghost btn-active btn-circle'><FaLinkedin /></button>
            </div>
        </div>
    );
};

export default SocialLogin;