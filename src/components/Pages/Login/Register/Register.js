import React, { useEffect, useRef } from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {FaMale } from 'react-icons/fa';
import {useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useUpdateProfile} from 'react-firebase-hooks/auth'
import auth from '../../../../firebase.config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialSignIn from '../../../Shared/SocialSignIn/SocialSignIn';
import Email from '../../../../images/message.png'
import password from '../../../../images/password.png'


const Register = () => {
    //create user and send virification email
    const [
        createUserWithEmailAndPassword,
        user,
       
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      //reset password
      const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
      );
      const [updateProfile, profileError] = useUpdateProfile(auth);
      const navigate=useNavigate()
      const emailRef=useRef()
      
    let errorMessage;
    if(error || profileError || resetError){
        errorMessage=<p className='text-center text-danger'>{error?.message}</p>
    }
    const location=useLocation()
  
    const from=location?.state?.from?.pathname || '/'
   //if user exist then navigate to home page 
     useEffect(()=>{
      if(user){
        navigate(from,{replace:true})
       
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
    const resetPassword = async (e) => {
        const email = emailRef.current.value;
       
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast.error('please enter your email address');
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
                    <img src={Email} alt="" />
                    <input ref={emailRef} type="email" name="email"  className="user-input" placeholder="Email" required/>
                </div>
                <div className="password">
                    <img src={password} alt="" />
                    <input type="password" name="password"  placeholder="password" className="pass-input"  required/>
                </div>
               
            </div>
            {errorMessage}
            <button type='submit' className="signin-button">Register</button>
          </form>
            <div className="input-link mt-2">
                <p>Already Have a Account? <span className='text-secondary'></span> <Link className='text-primary' to="/login">Login</Link></p>
            </div>
            <p  className='text-center'>Forgate password? <span className='text-secondary'></span> <span onClick={resetPassword} style={{cursor:"pointer"}} className='text-primary'>reset</span></p>
            <SocialSignIn />
            <ToastContainer />
        </div>
        </div>
    );
};

export default Register;