import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaAddressCard, FaMale,FaPhone, FaServicestack } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.config';

const CheckOut = () => {
    const [user]=useAuthState(auth)
    const {serviceId}=useParams()
    const [selectedService,setSelectedService]=useState({});

 

      

 

  
 useEffect(()=>{
 fetch('./../services.json')
 .then(res=>res.json())
 .then(data=>{
    const exist=data.find(item=>item.id===+serviceId)
    setSelectedService(exist)
 })
 

 },[serviceId])

    const handleCheckOut=(e)=>{
        e.preventDefault()
        const name=e.target.name.value
        const email=e.target.email.value
        const phone=e.target.phone.value
        const address=e.target.address.value
        const serviceName=e.target.serviceName.value
        alert(`name:${name}\nemail:${email}\nphone:${phone}\naddress:${address}\nService Name:${serviceName}`)
    }
    return (
        <div className='login-container'>
        <div className="login-div">

            <div className="title">
                CheckOut
            </div>

          <form  onSubmit={handleCheckOut}>
          <div className="fields">
                <div className="username">
                    <FaMale />
                   
                    <input type="text" name="name" value={user?.displayName} readOnly  className="user-input" placeholder="Full Name" required/>
                </div>
                <div className="username">
                    <img src="https://e7.pngegg.com/pngimages/490/260/png-clipart-email-email-miscellaneous-angle.png" alt="" />
                    <input type="email" name="email" value={user?.email} readOnly  className="user-input" placeholder="Email" required/>
                </div>
                <div className="username">
                    <FaPhone />
                    <input type="tel" name="phone"  className="user-input" placeholder="Phone" required/>
                </div>
                <div className="username">
                    <FaAddressCard />
                    <input type="text" name="address"  className="user-input" placeholder="Address" required/>
                </div>
                <div className="username">
                   <FaServicestack />
                    <input type="text" defaultValue={selectedService?.title}   name="serviceName"  className="user-input" placeholder="Service" required/>
                </div>
                
               
            </div>
    
            <button type='submit' className="signin-button">Send</button>
          </form>
           
           
        </div>
    </div>
    );
};

export default CheckOut;