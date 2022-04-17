import React from 'react';
import './Loading.css'

const Loading = () => {
    return (
        <div  className='d-flex align-items-center justify-content-center loading-container'>

        
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
        
        </div>
    );
};

export default Loading;