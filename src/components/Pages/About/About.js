import React from 'react';
import './about.css';
import AboutImage from '../../../images/about.jpg'

const About = () => {
    return (
        <>
            <main className='container my-5'>
                <div>
                    {/* about image  container */}
                    <div className="row mt-5 pt-5 gy-5 ">
                        <div className="col-md-6 d-flex justify-content-lg-end justify-content-center">
                            <img className='about-img' src={AboutImage} alt="" />

                        </div>
                        {/* about description container */}
                        <div className="col-md-6 pt-3 pb-5 px-3 bg-white">
                            <h3 className='name-title'>Istiak Hasan</h3>
                            <div className='d-flex align-items-center justify-content-between'>
                                <h5>Web Developer</h5>
                                <div className='flex-grow-1 '>

                                    <hr className='stright-line' />
                                </div>
                            </div>
                            <p className='text-secondary'>A front-end developer with over 2 yearsof experience in designing and developing user interfaces, testing and debugging. Learning
                                Something new and improving my knowledge, skills and abilities are my main focus. To work as part of a dynamic, team where there
                                is an opportunity to make significant contribution along with developing personal skills. I always look forward to new challenges
                                and experiences. I have ability to learn anything very quickly.</p>
                            <h3 className='mt-5'>Learning Javascript</h3>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                    aria-valuemin="0" aria-valuemax="100" style={{ width: "70%", background: "#F5ABAC" }}>
                                    70%
                                </div>
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-center'>
                            <hr className='stright-line-end me-2' />
                            0
                            <hr className='stright-line-end ms-2' />
                        </div>

                    </div>
                </div>
            </main>

        </>
    );
};

export default About;