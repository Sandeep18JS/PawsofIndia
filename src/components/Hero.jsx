import React from 'react'
import { dog } from '../assets'
import { logo } from '../assets'


const Hero = () => {
    return (
        <div className='bg-[#C3BCA7] w-full h-[500px] lg:h-[550px] flex flex-col gap-12 md:flex-row md:gap-0 '>
            <div className='md:w-2/5 mx-auto flex flex-col items-center justify-center gap-4 md:gap-8 lg:gap-16 mt-8 md:mt-0 '>
                <img src={logo} alt='logo' className='w-8 h-8 object-contain' />
                <h1 className='w-full font-stolzl-Bold text-center text-[25px] md:text-[30px] lg:text-[40px]'>"Your Gateway to the Marvels of India's Native Dog Breeds"</h1>
                <p className='font-stolzl-Book font-bol'>pawsofindia.com</p>
            </div>
            <div className='md:w-2/5 mx-auto flex justify-center items-center'><img src={dog} alt='Dog' className=' items-center w-[200px] h-[200px] md:w-[350px] md:h-[350px]  lg:w-[500px] lg:h-[450px] object-cover rounded-sm' /></div>

        </div>
    )
}

export default Hero

