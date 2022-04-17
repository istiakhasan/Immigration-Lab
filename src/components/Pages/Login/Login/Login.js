import React, { useEffect, useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.config';
import Loading from '../../../Shared/Loading/Loading';
import SocialSignIn from '../../../Shared/SocialSignIn/SocialSignIn';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
      );
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate=useNavigate()
      const emailRef=useRef()
      //
      const location=useLocation()
 
      const from=location?.state?.from?.pathname || '/'

    

      //if any error
      let errorMessage;
      if(error){
          errorMessage=<p className='text-center text-danger'>{error.message}</p>
      }
      useEffect(()=>{
        if(user){
            navigate(from,{replace:true})
        }
      },[user])


      //   loading spinner 
      if(loading){
        return <Loading />
      }

      

      //Log in handle with email and password
      const handleLogIn=(e)=>{
          e.preventDefault()
          const email=e.target.email.value 
          const password=e.target.password.value 
          if(email && password){
              signInWithEmailAndPassword(email,password)
          }
      }

      //reset password
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
                    Login
                </div>

                 <form onSubmit={handleLogIn}>
                 <div className="fields">
                    <div className="username">
                        <img src="https://e7.pngegg.com/pngimages/490/260/png-clipart-email-email-miscellaneous-angle.png" alt="" />
                        <input ref={emailRef} type="email" name="email"  className="user-input" placeholder="Email"  required/>
                    </div>
                    <div className="password">
                        <img src="https://flyclipart.com/thumb2/password-png-icon-free-download-121695.png" alt="" />
                        <input type="password" name="password"  placeholder="password" className="pass-input" required/>
                    </div>
                </div>
                {errorMessage}
                <button type='submit' name="button" className="signin-button">login</button>
                 </form>
                <div className="input-link mt-2">
                    <p>Don't hava an account? <span className='text-secondary'></span> <Link className='text-primary' to="/register">Sign Up</Link></p>
                </div>
              
                    <p  className='text-center'>Forgate password? <span className='text-secondary'></span> <span onClick={resetPassword} style={{cursor:"pointer"}} className='text-primary'>reset</span></p>
                    <ToastContainer />
                <SocialSignIn />
            </div>
        </div>
    );
};

export default Login;