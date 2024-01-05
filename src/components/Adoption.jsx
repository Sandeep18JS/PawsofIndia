import React from 'react'
import { Adoptme, connect, dogadopt, search } from '../assets'

const Adoption = () => {
    return (


        <div className='flex flex-col flex-1 justify-center items-center mt-10 mb-10'>
            <h1 className='font-stolzl-Light font-bold text-[30px] sm:text-[40px] md:text-[50px] md:mb-16'>How it works ?</h1>

            <div className='flex flex-col md:flex-row  justify-center items-center w-full  mx-auto gap-4 md:gap-0 lg:gap-8'>
                <img src={Adoptme}
                    alt='Adopt Me'
                    className=' w-[350px] h-[250px] md:w-[400px] md:h-[300px] lg:w-[450px] lg:h-[350px]'
                />
                <div className='md:w-[450px] lg:w-[500px]  flex flex-col gap-6'>
                    <div className='flex gap-4 lg:gap-10'>
                        <img src={search} className='w-20 h-20 mt-4 ' />
                        <div className=' lg:2/3'>
                            <h3 className='font-stolzl-Light font-medium text-[18px] lg:text-[20px]  text-[#252634] mb-2'>Search</h3>
                            <p className='font-stolzl-Book text-[14px] tracking-wide  text-[#4E4F66]'>Click on the Adopt button down below.Once you do that you'll be navigated to Adoption page,Now enter your city on Search bar and start searching.</p>
                        </div>
                    </div>
                    <div className='flex gap-4 lg:gap-10'>
                        <img src={connect} className='w-20 h-20 mt-4' />
                        <div className='lg:2/3'>
                            <h3 className='font-stolzl-Light font-medium text-[18px] lg:text-[20px] text-[#252634] mb-2'>Connect</h3>
                            <p className='font-stolzl-Book text-[14px] tracking-wide  text-[#4E4F66]'>Once you find a dog, click "show number" to get contact info for their pet parent or rescue. Contact them to learn more about how to meet and adopt the dog.</p></div>
                    </div>
                    <div className='flex gap-4 lg:gap-10'>
                        <img src={dogadopt} className='w-20 h-20 mt-4' />
                        <div className='lg:2/3'>
                            <h3 className='font-stolzl-Light font-medium text-[#252634] text-[18px] lg:text-[20px] mb-2'>Adopt</h3>
                            <p className='font-stolzl-Book text-[14px] tracking-wide  text-[#4E4F66]'>The rescue or pet parents will walk you through their adoption process. Prepare your home for the arrival of your fur baby to help them adjust to their new family.</p></div>
                    </div>
                </div>

            </div>
            <button className='w-36 h-10 mt-10 lg:mt-16 mx-auto bg-[#252634] text-[#C3BCA7] rounded font-Stolzl-Book font-medium hover:text-[#252634] hover:bg-white border-2 border-[#252634] hover:border-[#252634]'>Adopt</button>
        </div>
    )
}

export default Adoption