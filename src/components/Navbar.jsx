import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { logo, menu, close } from '../assets'
import { navLinks } from '../constants'


const Navbar = () => {
    const [active, setActive] = useState("")
    const [toggle, setToggle] = useState(false)

    return (
        <nav className='bg-[#252634] text-white w-full py-2.5 px-3 md:px-12  flex items-center
          z-20 top-0'>
            <div className='w-full flex justify-between items-center'>
                <Link
                    to='/'
                    className='flex items-center sm:gap-1 '
                    onClick={() => {
                        setActive("")
                        window.scrollTo(0, 0)
                    }}
                >
                    <img src={logo} alt='logo' className='w-14 h-14 object-contain' />
                    <p className='text-[#C3BCA7]  cursor-pointer flex font-stolzl-Bold text-[33px] mt-1'>P<span className=' text-[20px] mt-[14.5px]'>awsof</span>I<span className=' text-[20px] mt-[14.5px]'>ndia</span></p>
                </Link>
                <ul className='list-none hidden sm:flex felx-row gap-8 mr-12'>
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${active === link.title ? "text-white" : "text-[#C3BCA7]"} hover:text-white text-[18px] font-stolzl-medium font-bold  cursor-pointer mt-2`}
                            onClick={() => setActive(link.title)}
                        ><a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>

                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <img
                        src={toggle ? close : menu}
                        alt={toggle ? "close" : "Menu"}
                        className='w-10 h-10 object-contain cursor-pointer mr-3'
                        onClick={() => setToggle(!toggle)}
                    />
                    <div className={`${toggle ? "flex" : "hidden"} p-6 the-gradient absolute top-20  right-0 mx-2 my-2 min-w-[140px] z-10 rounded-xl  `}>
                        <ul className='list-none flex flex-1 flex-col  gap-4'>
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`${active === link.title ? "text-white" : "text-[#AA9B73]"} hover:text-white text-[18px] font-stolzl-Medium font-bold  cursor-pointer mt-1`}
                                    onClick={() => {
                                        setActive(link.title)
                                        setToggle(!toggle)
                                    }}

                                ><a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar