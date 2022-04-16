import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services,setService]=useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <section>
            <h1 className='text-center'>Our Services</h1>
             <div className="row">
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