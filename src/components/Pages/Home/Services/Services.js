import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services,setService]=useState([])
    //load service data
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <section className=''>
            <h1 className='text-center'>Our Services</h1>
             <div className="row g-4 mt-5 pt-5">
                 {
                  services.map(service=>(
                      <Service key={service.id} service={service} />
                  ))
                 }
             </div>
        </section>
    );
};

export default Services;