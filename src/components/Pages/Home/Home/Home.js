import React from 'react';
import Header from '../../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner />
            <main className='container mt-5 pt-5'>
                <Services />
            </main>
        </>
    );
};

export default Home;