import React from 'react';
import './Footer.css'
import { FaFacebook,FaYoutube,FaTwitter,FaLinkedin, FaCopyright } from 'react-icons/fa';

const Footer = () => {
    const date=new Date()
    let year = date.getFullYear()

    return (
        <footer className='bg-dark text-white text-center pt-3 mt-5'>
             <div className=''>
             <h3 className='text-white'>Immigration Lab</h3>
             <p><small>An unofficial website for  the Canada Imigration Service</small></p>
           
            <div className='icon-wraper'>
              
               <FaYoutube className="text-danger" height={50} width={50} /> 
               <FaLinkedin className="text-primary" height={50} width={50} /> 
               <FaTwitter className='text-white' height={50} width={50} /> 
               <FaFacebook className='text-primary  rounded-pill' /> 
            </div>
             </div>
            <p style={{background:"black"}} className='mt-4 pb-2'>{year} <FaCopyright /> all rights reserved design by istiak hasan</p>
            
        </footer>
    );
};

export default Footer;