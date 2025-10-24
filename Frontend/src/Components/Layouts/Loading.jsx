import React from 'react'
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import LoadingAnimation from '../../assets/Animations/Loading.lottie'

function Loading() {
    return (
        <div className='background-1 h-full w-full flex flex-col justify-center items-center'>
            <DotLottieReact src={LoadingAnimation} speed={3} loop autoplay className='absolute h-150' />
            <h1 className='relative mt-60 text-black dark:text-white text-2xl font-michroma font-semibold pt-5 
                    drop-shadow-lg drop-shadow-slate-400 md:text-3xl lg:text-4xl 2xl:text-5xl'> Loading... </h1>
        </div>
    )
}

export default Loading