import React from 'react';
import {Link} from 'react-router-dom'
import {FaMale } from 'react-icons/fa';

const Register = () => {
    return (
        <div className='login-container'>
        <div className="login-div">

            <div className="title">
                Register
            </div>

            <div className="fields">
                <div className="username">
                    <FaMale />
                   
                    <input type="text" name=""  className="user-input" placeholder="Name" />
                </div>
                <div className="username">
                    <img src="https://e7.pngegg.com/pngimages/490/260/png-clipart-email-email-miscellaneous-angle.png" alt="" />
                    <input type="email" name=""  className="user-input" placeholder="Email" />
                </div>
                <div className="password">
                    <img src="https://flyclipart.com/thumb2/password-png-icon-free-download-121695.png" alt="" />
                    <input type="password" name=""  placeholder="password" className="pass-input" />
                </div>
               
            </div>
            <button name="button" className="signin-button">Register</button>
            <div className="input-link mt-2">
                <a>Already Have a Account? <span className='text-secondary'>OR</span></a> <Link className='text-primary' to="/login">Login</Link>
            </div>
        </div>
    </div>
    );
};

export default Register;