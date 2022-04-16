import React from 'react';
import './service.css'

const Service = ({service}) => {
    const {img,title,description,price}=service
    return (
        <div className='col-md-4'>
            <div className="card service-card border-0 h-100 bg-none p-2">
                <img src={img} alt="" />
                <div className="card-body">
                    <h5 className="card-title">
                        {title}
                    </h5>
                    <p>${price}</p>
                    <p className='text-secondary'>{description}</p>
                </div>
                <div>

                <button className='mb-3 border-0 btn-color text-white fw-bold px-5 py-2 rounded-3 mx-auto d-block'>CheckOut</button>
                </div>
            </div>
            
        </div>
    );
};

export default Service;