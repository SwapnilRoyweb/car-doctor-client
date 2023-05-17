import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {

    const {title, img, price, _id} = service;

    return (
        <div className="card card-compact w-96 bg-gray-100 shadow-xl hover:rotate-6 ">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <p className='text-orange-600'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}><button className="btn btn-warning"><FaArrowRight/></button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;