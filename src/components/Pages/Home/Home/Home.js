import React from 'react';
import Footer from '../../../Shared/Footer/Footer';

import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
      
            <Banner />
            <main className='container mt-5 pt-5'>
                <Services />
            </main>
            <Footer />
            
        </>
    );
};

export default Home;