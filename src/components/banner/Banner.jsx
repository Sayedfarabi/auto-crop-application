import React from 'react';

const Banner = () => {
    return (
        <section className='py-12 md:py-16'>
            <div className='text-center mt-12'>
                <h1 className='text-2xl md:text-4xl font-semibold mb-2 text-gray-800'>Image <span className='text-lime-500'>Resizer</span> </h1>
                <p className='text-xl md:text-2xl text-gray-600'>Easily resize images online for free.</p>
            </div>
        </section>
    );
};

export default Banner;