import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className='login-container'>
            <div className="login-div">

                <div className="title">
                    Login
                </div>

                <div className="fields">
                    <div className="username">
                        <img src="https://e7.pngegg.com/pngimages/490/260/png-clipart-email-email-miscellaneous-angle.png" alt="" />
                        <input type="email" name=""  className="user-input" placeholder="Email" />
                    </div>
                    <div className="password">
                        <img src="https://flyclipart.com/thumb2/password-png-icon-free-download-121695.png" alt="" />
                        <input type="password" name=""  placeholder="password" className="pass-input" />
                    </div>
                </div>
                <button name="button" className="signin-button">login</button>
                <div className="input-link mt-2">
                    <a>Forgate Password? <span className='text-secondary'>OR</span></a> <Link className='text-primary' to="/register">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;