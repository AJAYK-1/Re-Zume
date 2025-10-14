import React from 'react'
import { logos } from "../Constants/companyLogos";

function LogosSection() {
    return (
        <>
            <div className='background-1 py-20 overflow-hidden'>
                <h1 className='text-center text-2xl font-michroma font-bold dark:text-white'> Get Hired at FAANG and more...</h1>
                <section className='flex gap-5 lg:gap-10 animate-marquee hover:[animation-play-state:paused] py-10'>
                    {[...logos, ...logos, ...logos]?.map((logo) => {
                        return (
                            <div key={logo.id} className="image-scroll" >
                                <img src={logo?.imgPath} alt={logo.alt} className=' object-contain w-20 h-16 md:w-30 md:h-20 lg:w-40  dark:drop-shadow-[0_0_20px_rgba(0,255,255,0.3)]' />
                            </div>
                        )
                    })}
                </section>
            </div>
        </>
    )
}

export default LogosSection