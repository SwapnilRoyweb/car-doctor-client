import React from 'react';
import logo from '../../../assets/logo.svg'
import { FaGooglePlusG, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-red-50 text-black ">
            <div>
                <img src={logo} alt="" />
                <p>Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .</p>
                <div className='flex gap-5 mt-3'>
                    <button className='btn btn-circle btn-primary'><FaGooglePlusG /></button>
                    <button className='btn btn-circle btn-primary'><FaTwitter /></button>
                    <button className='btn btn-circle btn-primary'><FaLinkedinIn /></button>
                    <button className='btn btn-circle btn-primary'><FaInstagram /></button>
                </div>
            </div>
                <div>
                    <span className="footer-title">About</span>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Service</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">Why Car Doctor</a>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Feedback</a>
                    <a className="link link-hover">Support Center</a>
                </div>
                <div>
                    <span className="footer-title">Support</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
        </footer>
    );
};

export default Footer;