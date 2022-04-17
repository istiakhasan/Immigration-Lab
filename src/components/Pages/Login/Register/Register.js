import React, { useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import {FaMale } from 'react-icons/fa';
import {useCreateUserWithEmailAndPassword, useUpdateProfile} from 'react-firebase-hooks/auth'
import auth from '../../../../firebase.config'
import { async } from '@firebase/util';
import SocialSignIn from '../../../Shared/SocialSignIn/SocialSignIn';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, profileError] = useUpdateProfile(auth);
      const navigate=useNavigate()
      
    let errorMessage;
    if(error || profileError){
        errorMessage=<p className='text-center text-danger'>{error.message}</p>
    }
   //if user exist then navigate to home page 
     useEffect(()=>{
      if(user){
        navigate('/')
        console.log(user)
      }
  
     },[user])
   
    //Submit button or sign up or register button handle
    const handleRegistration=async(e)=>{
        e.preventDefault()
      const name=e.target.name.value
      const email=e.target.email.value
      const password=e.target.password.value
   
      if( email && password){
        await createUserWithEmailAndPassword(email,password)
        await updateProfile({ displayName:name});
        
        console.log('Updated profile');
      }
     
    }

    return (
        <div className='login-container'>
        <div className="login-div">

            <div className="title">
                Register
            </div>

          <form onSubmit={handleRegistration}>
          <div className="fields">
                <div className="username">
                    <FaMale />
                   
                    <input type="text" name="name"  className="user-input" placeholder="Name" required/>
                </div>
                <div className="username">
                    <img src="https://e7.pngegg.com/pngimages/490/260/png-clipart-email-email-miscellaneous-angle.png" alt="" />
                    <input type="email" name="email"  className="user-input" placeholder="Email" required/>
                </div>
                <div className="password">
                    <img src="https://flyclipart.com/thumb2/password-png-icon-free-download-121695.png" alt="" />
                    <input type="password" name="password"  placeholder="password" className="pass-input"  required/>
                </div>
               
            </div>
            {errorMessage}
            <button type='submit' className="signin-button">Register</button>
          </form>
            <div className="input-link mt-2">
                <p>Already Have a Account? <span className='text-secondary'></span> <Link className='text-primary' to="/login">Login</Link></p>
            </div>
            <SocialSignIn />
        </div>
    </div>
    );
};

export default Register;