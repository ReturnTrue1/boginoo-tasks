import React from 'react';
import { Navigation } from './';

export const Layout = ({ children }) => {

    return (
        <div className='flex flex-col items-center' style={{ width: '100vw', height: '100vh' }}>
            {/* NAVIGATION */}
            <Navigation
                className='w100 flex justify-end items-center mt-10 mr-10'
                classNameRight='font-ubuntu fs-20 lh-23 bold c-default h-22 w-92 ph-22 ml-20 b-primary'
                classNameLeft='font-ubuntu fs-20 lh-23 bold c-primary'
                link='login'
            />

            {/* MAIN CONTENT */}
            <div className='w100 flex-1'>
                {children}
            </div>

            {/* FOOTER */}
            <footer className='mb-8 flex flex-col items-center' >
                <div className='font-ubuntu fs-16 lh-18'>
                    Made with &#10084; by Nest Academy
            </div>
                <div className='font-ubuntu fs-16 lh-18' style={{ opacity: 0.2 }}>
                    ©boginoo.io 2020
            </div>
            </footer>
        </div>
    );
};