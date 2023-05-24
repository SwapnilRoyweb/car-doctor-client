import { data } from 'autoprefixer';
import React from 'react';
import Swal from 'sweetalert2';

const BookingRow = ({ booking, handleDelete, handleConfirm }) => {

    const { img, date, service, price, _id, status} = booking;

    return (
        <tr>
            <th>
                <label>
                    <button className="btn btn-circle btn-error" onClick={() =>handleDelete(_id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="avatar">
                    <div className="w-32 rounded">
                        {img && <img src={img} />}
                    </div>
                </div>
            </td>
            <td>
                {service}
            </td>
            <td>{date}</td>
            <td>${price}</td>
            <th>
               {status === 'confirm' ? <span className='text-primary font-bold'>Confirmed</span> : <button className="btn btn-ghost btn-xs" onClick={() => handleConfirm(_id)}>Please Confirm</button>}
            </th>
        </tr>
    );
};

export default BookingRow;