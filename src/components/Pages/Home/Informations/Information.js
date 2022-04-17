import React, { useEffect, useState } from 'react';
import studyAbroad from '../../../../images/studyabroad-removebg-preview.png'
import { NewspaperIcon,AcademicCapIcon,CheckCircleIcon } from '@heroicons/react/solid'
import { FaCheckCircle } from 'react-icons/fa';


const Informations = () => {
    const [informations, setInformation] = useState([])
    useEffect(() => {
        fetch('Information.json')
            .then(res => res.json())
            .then(data => setInformation(data))
    })
    return (
        <section className='information-container'>
            <div className="row mt-5 pt-5">
                <div className="col-md-6 h-100">
                     <img className='img-fluid w-100' src={studyAbroad} alt="" />
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                     <div className=''>
                                 <div>
                                 <h3  style={{color:"#031F4B",fontSize:"50px"}}>We Provide Immigration <br /> <span className='text-danger'>And Visa</span> Services</h3>
                    <p>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    <p><FaCheckCircle style={{width:"24px",height:"24px"}} className='text-danger me-2' /> Take a look at our round up of the best shows</p>
                    <p><FaCheckCircle style={{width:"24px",height:"24px"}} className='text-danger me-2' />It has survived not only five centuries</p>
                                 </div>
                     </div>
                </div>
            </div>

        </section>
    );
};

export default Informations;