import React from 'react';
import './Banner.css'
import { NewspaperIcon,AcademicCapIcon,CheckCircleIcon } from '@heroicons/react/solid'

const Banner = () => {
 
  return (
   <div className="container-fluid banner-container h-100">
     <div className=' pt-5'>
     <article  className='text-white text-center my-5 pt-5'>
        <h4 style={{fontSize:"45px"}} className='text-white'>Study In <span className='text-danger'>Canada</span></h4>
        <hr />
        
        <p className='d-none d-lg-block '>Travel , Tourism, Engineering, Business, Health, Science and maney more...</p>
      </article>

     </div>
      
      <section className='row g-3  container mx-auto'>
    
        <div className='col-md-4   border-3 border-danger'>
        <div className="card h-100">
          
         <NewspaperIcon width={100} height={100} className="mx-auto icon-color" />
         <p className='text-center w-75 mx-auto fw-bold'>Study In Australia with out IELTS required</p>
        </div>
      </div>

    
           <div className='col-md-4 h-100 border-3 border-danger'>
             <div className="card h-100">

              <AcademicCapIcon width={100} height={100} className="mx-auto icon-color" />
              <p className='text-center w-75 mx-auto fw-bold'>Garanted  Admission in Top Ranked Universities</p>
             </div>
           </div>
           <div className='col-md-4  border-3 '>
             <div className="card h-100">

              <CheckCircleIcon  width={100} height={100} className="mx-auto icon-color" />
              <p className='text-center  w-75 mx-auto fw-bold'>Study And Education Visa Consultant</p>
             </div>
           </div>
      </section>

   </div>
  );
};

export default Banner;