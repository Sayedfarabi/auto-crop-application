import React from 'react';

const Navbar = () => {
    return (
        <section>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>
                    <p className='btn btn-ghost normal-case text-xl text-blue-500'>Auto<span className='text-lime-500'>Crop</span></p>
                </div>

                <div className="navbar-end">
                    <a href='#cropper'>
                        <button className='px-6 py-2 rounded-md bg-blue-500 hover:bg-lime-500 text-white font-semibold'>Get Started</button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Navbar;