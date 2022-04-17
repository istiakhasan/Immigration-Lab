import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.config';
import Loading from '../../../Shared/Loading/Loading';
import SocialSignIn from '../../../Shared/SocialSignIn/SocialSignIn';
import './Login.css'
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate=useNavigate()
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
                        <input type="email" name="email"  className="user-input" placeholder="Email"  required/>
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
                    <p>Forgate Password? <span className='text-secondary'></span> <Link className='text-primary' to="/register">Sign Up</Link></p>
                </div>
                <SocialSignIn />
            </div>
        </div>
    );
};

export default Login;