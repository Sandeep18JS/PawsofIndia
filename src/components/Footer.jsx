import React from 'react'
import { navLinks } from '../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {

    return (
        <div className='w-full py-2 bg-[#252634] flex flex-col justify-center items-center gap-5 '>
            <ul className='flex gap-8 mt-2'>
                <li>
                    <a href=''
                        target='_blank'
                        rel='noreferrer'>
                        <FontAwesomeIcon icon={faFacebookF} color='#C3BCA7' className='text-[20px]' />
                    </a>
                </li>
                <li>
                    <a href=''
                        target='_blank'
                        rel='noreferrer'><FontAwesomeIcon icon={faInstagram} color='#C3BCA7' className='text-[20px]' /></a>
                </li>
                <li>
                    <a href=''
                        target='_blank'
                        rel='noreferrer'><FontAwesomeIcon icon={faTwitter} color='#C3BCA7' className='text-[20px]' /></a>
                </li>
                <li>
                    <a href=''
                        target='_blank'
                        rel='noreferrer'><FontAwesomeIcon icon={faLinkedinIn} color='#C3BCA7' className='text-[20px]' /></a>
                </li>
            </ul>
            <ul className='list-none flex felx-row gap-8 md:gap-12 lg:gap-16'>
                {navLinks.map((link) => (
                    <li
                        key={link.id}
                        className="text-[#C3BCA7] text-[16px] font-stolzl-Book font-medium cursor-pointer"
                    ><a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))}
            </ul>
            <p className='text-[#C3BCA7] font-stolzl-Book font-medium text-[15px]'>PawsofIndia @ 2023 </p>
        </div>
    )
}

export default Footer

