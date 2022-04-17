import React from 'react';
import './Footer.css'
import { FaFacebook,FaYoutube,FaTwitter,FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-dark text-white text-center pt-3 mt-5'>
             <div className=''>
             <h3>Immigration Lab</h3>
             <p><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident in autem nostrum voluptatem quod. Sit optio at assumenda incidunt corporis.</small></p>
           
            <div className='icon-wraper'>
              
               <FaYoutube className="text-danger" height={50} width={50} /> 
               <FaLinkedin className="text-primary" height={50} width={50} /> 
               <FaTwitter className='text-white' height={50} width={50} /> 
               <FaFacebook className='text-primary  rounded-pill' /> 
            </div>
             </div>
            <p style={{background:"black"}} className='mt-4 pb-2'>2020 all rights reserved design by istiak hasan</p>
            
        </footer>
    );
};

export default Footer;