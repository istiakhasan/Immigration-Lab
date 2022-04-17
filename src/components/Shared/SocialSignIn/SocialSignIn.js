import React, { useEffect } from 'react';
import googleicon from '../../../images/google.png'
import giticon from '../../../images/github.png'
import './SocialIcon.css'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.config';
import {  useLocation, useNavigate } from 'react-router-dom';


const SocialSignIn = () => {
    const [signInWithGoogle, user,error] = useSignInWithGoogle(auth);
    const [signInWithGithub,user1,  gitError] = useSignInWithGithub(auth);

    const navigate=useNavigate()
    let errorMessage;
    if(error || gitError){
        errorMessage=<p className='text-center text-danger'>{error?.message}</p>
    }
    const location=useLocation()
   
    const from=location?.state?.from?.pathname || '/'
    useEffect(()=>{
        if(user || user1){
            navigate(from,{replace:true})
        }
    },[user,user1])
   
    return (
        <div>
             {errorMessage}
             <div onClick={()=>signInWithGoogle()} className='socialicon-wraper rounded-pill'>
                 <img src={googleicon} alt="" />
                 <p className="ms-3"><small>Google Sign In</small></p>
             </div>
             <div className='socialicon-wraper rounded-pill mt-2'>
                 <img src={giticon} alt="" />
                 <p onClick={()=>signInWithGithub()} className="ms-3"><small>Github Sign In</small></p>
             </div>

             
            
        </div>
    );
};

export default SocialSignIn;