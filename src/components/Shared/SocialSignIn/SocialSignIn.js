import React from 'react';
import googleicon from '../../../images/google.png'
import giticon from '../../../images/github.png'
import './SocialIcon.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.config';
import {  useNavigate } from 'react-router-dom';

const SocialSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate=useNavigate()
    if(user){
        navigate('/')
    }

    return (
        <div>

             <div onClick={()=>signInWithGoogle()} className='socialicon-wraper rounded-pill'>
                 <img src={googleicon} alt="" />
                 <p className="ms-3"><small>Google Sign In</small></p>
             </div>
             <div className='socialicon-wraper rounded-pill mt-2'>
                 <img src={giticon} alt="" />
                 <p className="ms-3"><small>Google Sign In</small></p>
             </div>
            
        </div>
    );
};

export default SocialSignIn;