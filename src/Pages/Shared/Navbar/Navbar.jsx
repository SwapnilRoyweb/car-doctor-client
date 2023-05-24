import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { FaSearch, FaShoppingBag, FaSignOutAlt } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {

    const { user, SignOut } = useContext(AuthContext);

    const signOut = () => {
        SignOut()
            .then(result => {
                Swal.fire({
                    title: 'Sign Out',
                    text: 'User Logout Successfully',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                })
                localStorage.removeItem('car-access-token');
            })
            .catch(error => console.log(error))
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Services</Link></li>
        <li><Link>Blog</Link></li>
        {user && <li><Link to='/bookings'>My Bookings</Link></li>}
    </>

    return (
        <div className="navbar bg-white rounded-lg h-28 mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end flex gap-2">
                <button className='btn btn-ghost'><FaShoppingBag /></button>
                <button className='btn btn-ghost'><FaSearch /></button>
                {
                    user && <h1>{user.email}</h1>
                }
                <Link to='/signUp'><button className="btn btn-outline btn-error">Appointment</button></Link>
                {user &&
                    <button className="btn btn-outline btn-error btn-circle" title='Logout' onClick={signOut}><FaSignOutAlt /></button>
                }
            </div>
        </div>
    );
};

export default Navbar;