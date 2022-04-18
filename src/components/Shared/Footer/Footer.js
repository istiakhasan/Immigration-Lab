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
              <a href='https://www.youtube.com/' target="_blank"><FaYoutube  className="text-danger" height={50} width={50} /> </a>
              <a href='https://www.linkedin.com/' target="_blank"><FaLinkedin className="text-primary" height={50} width={50} /> </a>
              <a href='https://twitter.com/Istiak__Hasan' target="_blank"><FaTwitter className='text-white' height={50} width={50} />  </a>
              <a href={"https://www.facebook.com/istieak"} target="_blank"> <FaFacebook className='text-primary  rounded-pill' />  </a>
               
                
               
              
            </div>
             </div>
            <p style={{background:"black"}} className='mt-4 pb-2'>{year} <FaCopyright /> all rights reserved design by istiak hasan</p>
            
        </footer>
    );
};

export default Footer;