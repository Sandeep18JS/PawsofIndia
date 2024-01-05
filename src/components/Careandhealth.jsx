import React from 'react';
import { BehavioralHealth, EmergencyCare, ExerciseandActivities, Grooming, Healthcare, Nutrition, dog1 } from '../assets';

const Careandhealth = () => {
    return (
        <div className=' flex flex-col flex-1 justify-center items-center  text-center mt-10 mb-10'>
            <h1 className='text-[#252634] font-stolzl-Bold font-bold text-[30px] sm:text-[35px] md:text-[40px] lg:text-[50px] mb-10 z-20'>Care and Health</h1>

            <div className='flex flex-wrap justify-center items-center max-w-5xl mx-auto text-[15px] sm:text-[16px] md:text-[17px] lg:text-[20px] font-stolzl-Book font-bold gap-6 md:gap-0'>
                <div className='w-2/5 xl:w-1/3  flex flex-col items-center z-20'>
                    <div className='mb-8 flex items-center gap-4'>
                        <img src={Healthcare} alt="Healthcare Icon" className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24' />
                        <h3>Health Care</h3>
                    </div>

                    <div className='mb-8 flex  sm:mr-48 md:mr-80  items-center gap-4'>
                        <img src={Grooming} alt="Grooming Icon" className='w-16 h-16  md:w-20 md:h-20 lg:w-24 lg:h-24' />
                        <h3>Grooming</h3>
                    </div>

                    <div className='mb-8 flex items-center gap-4'>
                        <img src={ExerciseandActivities} alt="Exercise Icon" className='w-16 h-16  md:w-20 md:h-20 lg:w-24 lg:h-24' />
                        <h3>Exercise & Activities</h3>
                    </div>
                </div>

                <div className='hidden sm:flex absolute z-0'>
                    <img src={dog1} alt="Exercise Icon" className='w-[250px] h-[300px] sm:w-[300px] sm:h-[350px] md:w-[350px] md:h-[400px] lg:w-[400px] lg:h-[450px] mb-16 ml-8' />
                </div>

                <div className='w-2/5 xl:w-1/3 flex flex-col items-center z-20'>
                    <div className='mb-8 flex items-center gap-4'>
                        <h3>Behavioral Health</h3>

                        <img src={BehavioralHealth} alt="Behavioral Health Icon" className='w-16 h-16  md:w-20 md:h-20 lg:w-24 lg:h-24' />
                    </div>
                    <div className=' sm:ml-28 md:ml-48 lg:ml-60 xl:ml-80 mb-8 flex items-center gap-4  '>
                        <h3>Nutrition</h3>

                        <img src={Nutrition} alt="Nutrition Icon" className='w-16 h-16  md:w-20 md:h-20 lg:w-24 lg:h-24' />
                    </div>


                    <div className=' mb-8 flex items-center gap-4'>
                        <h3>Emergency Care</h3>

                        <img src={EmergencyCare} alt="Senior Dog Care Icon" className='w-16 h-16  md:w-20 md:h-20 lg:w-24 lg:h-24' />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careandhealth;

