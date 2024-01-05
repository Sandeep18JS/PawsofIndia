import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Contactus = () => {
    const [fname, setfName] = useState('')
    const [lname, setlName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [message, setMessage] = useState('')


    const handleSubmit = () => {

    }

    return (


        <div className='bg-[#C3BCA7] w-full h-[700px] lg:h-[550px] flex flex-col lg:flex-row lg:justify-center items-center gap-12 lg:gap-36'>

            <div className='bg-[#252634] text-[#C3BCA7] w-3/4 h-[250px] lg:w-[27%] lg:h-[450px] rounded mt-10 lg:mt-0 lg:tracking-wider'>
                <h1 className='font-stolzl-Medium font-bold text-[25px] lg:text-[30px]  text-center mt-2 lg:mt-12'>Contact Info</h1>
                <div className='w-3/4 flex flex-col lg:gap-12 text-justify  font-Stolzl-Book font-medium  mt-6 lg:mt-14 ml-10 gap-6'>
                    <div className='flex gap-4'>
                        <FontAwesomeIcon icon={faAddressBook} className='mt-1.5 text-[15px] lg:text-[18px]' />
                        <p className='text-justify'>Apt. 381 3813 Reinger Port, Kennethhaven, NJ 36846-2091</p>
                    </div>
                    <div className='flex gap-4'>
                        <FontAwesomeIcon icon={faEnvelope} className='mt-1.5 text-[15px] lg:text-[18px]' /><p>pawsofindia@gmail.com</p>
                    </div>
                    <div className='flex gap-4'>
                        <FontAwesomeIcon icon={faPhone} className='mt-1.5 text-[15px] lg:text-[18px]' />
                        <p>+91 9651135135</p>
                    </div>
                </div>
            </div>


            <div className='w-3/4 h-[250px] lg:w-[34%] lg:h-[450px] text-[#252634] '>
                <h1 className='font-stolzl-Medium font-bold text-[25px]  lg:text-[30px] text-center mb-8 lg:mb-12'>Send us a message</h1>
                <form onSubmit={handleSubmit} className='flex flex-col gap-2 lg:gap-6 font-Stolzl-Book font-medium '>
                    <div className='flex '>
                        <div className='flex flex-col w-3/4 gap-2 lg:gap-4'>
                            <label>  First name </label>
                            <input
                                type='text'
                                value={fname}
                                onChange={(e) => setfName(e.target.value)}
                                className='w-11/12 border-b-2 border-black bg-[#C3BCA7]  focus:outline-none'

                            />
                        </div>
                        <div className='flex flex-col w-3/4 gap-2 lg:gap-4'>
                            <label>Last name </label>
                            <input
                                type='text'
                                value={lname}
                                onChange={(e) => setlName(e.target.value)}
                                className='w-11/12 border-b-2 border-black bg-[#C3BCA7]  focus:outline-none' />
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='flex flex-col w-3/4 gap-2 lg:gap-4'>
                            <label>Email </label>
                            <input
                                type='text'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='w-11/12 border-b-2 border-black bg-[#C3BCA7]  focus:outline-none' /></div>
                        <div className='flex flex-col w-3/4 gap-2 lg:gap-4'>
                            <label>Phone number</label>
                            <input
                                type='text'
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                className='w-11/12 border-b-2 border-black bg-[#C3BCA7]  focus:outline-none' />
                        </div>
                    </div>

                    <div className='flex flex-col  gap-2 lg:gap-4'>
                        <label>Write your message here</label>
                        <textarea
                            type='text'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className='w-11/12 border-b-2 border-black bg-[#C3BCA7]  focus:outline-none' />
                    </div>


                </form>
                <button type='submit' className='mt-6 lg:mt-10 w-36 h-10 bg-[#252634] text-[#C3BCA7] rounded font-Stolzl-Book font-medium hover:text-[#252634] hover:bg-[#C3BCA7] border-2 border-[#252634] hover:border-[#252634]'> Send</button>

            </div>
        </div >
    )
}

export default Contactus