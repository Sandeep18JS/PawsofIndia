import React, { useState } from 'react';
import { Faqs } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Faqsection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="mt-10 mb-10 max-w-4xl mx-auto text-[#252634] flex flex-col flex-wrap ">
            <h2 className="text-[#252634] text-center font-stolzl-Bold font-bold text-[30px] sm:text-[40px] md:text-[50px] mb-6">FAQ</h2>

            {Faqs.map((item, index) => (
                <div key={index} className="mb-4">
                    <div className='hidden lg:flex'>
                        <FontAwesomeIcon
                            icon={openIndex === index ? faChevronUp : faChevronDown}
                            className="absolute font-[#252634] mt-5 text-2xl lg:ml-[800px]  cursor-pointer"
                            onClick={() => handleToggle(index)}
                        />
                    </div>
                    <div
                        className="cursor-pointer shadow-xl rounded py-3 "
                        onClick={() => handleToggle(index)}
                    >
                        <h3 className="ml-4 sm:ml-8 mt-1 mb-1 sm:mt-2 sm:mb-2 text-lg md:text-xl font-sotlzl-Bold font-medium ">{item.question}</h3>


                        {openIndex === index && (
                            <p className='mt-10 mb-4  px-4 sm:px-8 text-[14px] md:text-[16px] font-stolzl-Book tracking-wide'>{item.answer}</p>
                        )}
                    </div>

                </div>
            ))}
        </div>
    );
};

export default Faqsection;
