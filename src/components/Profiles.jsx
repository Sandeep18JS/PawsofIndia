import React, { useEffect, useState } from 'react';
import { posts } from '../constants';

const Posts = ({ image, name, description }) => {
    return (
        <div className='bg-[#f3ebe9] w-[360px] cursor-pointer'>
            <div className='relative w-full h-[220px]'>
                <img src={image} className='w-full h-full object-cover' />
            </div>
            <div className='px-5 pt-5'>
                <h3 className='font-stolzl-Medium font-bold text-[28px] text-[#252634] mb-2'>{name}</h3>
                <p className='font-stolzl-Book text-[14px] tracking-wide text-[#252634] line-clamp-4 '>{description}</p>
            </div>
        </div>
    );
};

const Profiles = () => {
    const [visiblePosts, setVisiblePosts] = useState(1)

    const scrollLeft = () => {
        setVisiblePosts((prev) => (prev - 1 >= 0 ? prev - 1 : posts.length - 1));
    }
    const scrollRight = () => {
        setVisiblePosts((prev) => (prev + 1 < posts.length ? prev + 1 : 0));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setVisiblePosts((prev) => (prev + 1 <= posts.length - 2 ? prev + 1 : 1))
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className='overflow-x-hidden max-w-7xl mx-auto flex flex-col flex-1 w-full h-[550px] '>
            <div className=' ml-auto'>
                <div className=' font-stolzl-Medium font-medium cursor-pointer hover:text-[#AA9B73] mb-6'><span className=' underline underline-offset-4 text-[18px]'>Learn more</span><span className='text-2xl no-underline '> &rarr;</span></div>
            </div>
            <div className='flex mx-auto'>
                <div className='hidden lg:flex'>
                    <button onClick={scrollLeft} className=' text-[#252634] text-5xl transform transition-transform duration-300 ease-in-out hover:scale-125'>&larr;</button>
                </div>
                <div className='flex max-w-6xl  overflow-hidden bg-[#252634]  mx-auto rounded-sm'>
                    <div className='flex transition-transform duration-1000 ease-in-out gap-5 m-4'
                        style={{
                            transform: `translateX(-${(visiblePosts - 1) * 380}px)`
                        }}
                    >
                        {posts.map((post, index) => (
                            <Posts key={`post-${index}`} index={index} {...post} />
                        ))}
                    </div>

                </div>

                <div className='hidden lg:flex'>
                    <button onClick={scrollRight} className='text-[#252634] text-5xl transform transition-transform duration-300 ease-in-out hover:scale-125 '>&rarr;</button>
                </div>



            </div>
        </div>
    );
};

export default Profiles;
