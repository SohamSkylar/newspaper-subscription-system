import React from 'react'
import Homepage from '../Homepage'
import { Link } from "react-scroll";

const HeroLanding = () => {
    return (
        <>
            <div className='w-full h-screen flex flex-col justify-between relative z-10'>
                <div className='max-w-[700px] m-auto md:mr-[0px] lg:justify-items-end p-6 justify-items-center'>
                    <div className='flex flex-col justify-center md:items-start w-full px-2 py-2'>
                        <p className='text-4xl py-3 xl:text-7xl font-bold'>Elevate Your News Experience...</p>
                        <p className='text-md xl:text-2xl py-3'>Subscribe to Newspapers and Stay Ahead of the Curve!</p>
                        <button className='py-2 px-6'>
                            <Link
                                to="cardSection"
                                smooth={true}
                                offset={-200}
                                duration={500}
                            >
                                Browse
                            </Link></button>
                    </div>
                </div>

            </div>
            <div>
                <img className='w-full h-screen object-cover bg-no-repeat absolute inset-0 lg:flex justify-center items-center z-0 lg:blur-sm blur-2xl' src='https://images.unsplash.com/photo-1551406483-3731d1997540?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' alt='/' />
            </div>
        </>
    )
}

export default HeroLanding