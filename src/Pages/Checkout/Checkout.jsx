import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const Checkout = () => {

    const service = useLoaderData();
    // console.log(service);
    const { _id, title,  price, img} = service;

    const {user} = useContext(AuthContext);

    const handleBookService = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const amount = price;
        const order = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price
        }
        // console.log(order);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire(
                    'Good job!',
                    'Service booked successfully',
                    'success'
                  )
            }
        })
    }

    return (
        <div className='my-10'>
            <h2 className='text-center text-3xl font-bold my-5'>Book Service: {title}</h2>
            <form onSubmit={handleBookService}>
                <div className="card-body bg-red-100 rounded-xl">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' className="input input-bordered bg-white" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name='date' className="input input-bordered bg-white" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" defaultValue={user?.email} name='email' className="input input-bordered bg-white" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" defaultValue={'$'+price} className="input input-bordered bg-white" />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value='Confirm Order' className='btn btn-error btn-block' id="" />
                    </div>
                </div>
            </form>
        </div >
    );
};

export default Checkout;