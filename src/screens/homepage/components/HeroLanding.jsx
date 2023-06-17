import React from 'react'

const HeroLanding = () => {
    return (
        <>
            <div className='w-full h-screen flex flex-col justify-between relative z-10'>
                <div className='max-w-[800px] m-auto mr-[0px] justify-items-end p-14'>
                    <div className='flex flex-col justify-center md:items-start w-full px-2 py-2'>
                        <p className='text-5xl py-3 md:text-7xl font-bold'>Elevate Your News Experience</p>
                        <p className='text-2xl py-3'>Subscribe to Newspapers and Stay Ahead of the Curve!</p>
                        <button className='py-2 px-6'>Get Started</button>
                    </div>
                </div>

            </div>
            <div>
                <img className='w-full h-screen object-cover bg-no-repeat absolute inset-0 flex justify-center items-center z-0 blur-sm' src='https://images.unsplash.com/photo-1615403916271-e2dbc8cf3bf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' alt='/' />
            </div>
        </>
    )
}

export default HeroLanding