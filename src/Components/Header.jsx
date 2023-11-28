import React from 'react';
import { Link } from 'react-router-dom';
 import './Header.css';
function Header(){
    return(
        
        <div className="d-flex justify-content-between bg-white px-4 py-1 w-100" style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',}}>
            <div>
                <img src="https://digital-lync.konalms.com/assets/logo.ab024049.png" alt="Logo" />
            </div>
            <div className="d-flex  justify-content-center align-items-center">
                {/* {<div className='me-4'>
                    <Link to='./dashboard'><p className="m-0 p-0">Admin Portal</p></Link>
                </div>} */}
                <div className='position-relative'>
                    <h3 className="rounded-circle bg-secondary text-white fs-5 m-0" style={{padding: '15px 17px', fontWeight:'400', }}>VA</h3>
                    <div className="profile-popup bg-white ">
                        <Link  className='text-decoration-none text-dark' to='/myprofile'><p><i class="fa-solid fa-user me-2"/>My Profile</p></Link>
                        <Link className='text-decoration-none text-dark' to='/'><p><i class="fa-solid fa-right-from-bracket me-2"/>Sign Out</p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;