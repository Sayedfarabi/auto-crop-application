import React from 'react';

const FeatureCard = ({ feature }) => {
    return (
        <div className="card w-72 bg-base-100 mx-auto">
            <figure className="px-10 pt-10">
                <img src={feature?.icon} alt="Feature" className="rounded-xl w-16 h-16" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title my-2 text-lime-500">{feature?.title}</h2>
                <p className='text-gray-600'>{feature?.feature}</p>
            </div>
        </div>
    );
};

export default FeatureCard;