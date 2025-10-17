import React from 'react'
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import errorPageAnimaiton from '../../assets/Animations/ErrorPage.lottie'
import { FaArrowCircleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Error() {
    const navigate = useNavigate()
    return (
        <div className='background-2 h-full w-full grid grid-cols-1 place-content-start place-items-center lg:grid-cols-2 lg:place-content-center'>
            <DotLottieReact
                src={errorPageAnimaiton}
                loop autoplay
                className='order-1 lg:order-2 drop-shadow-md drop-shadow-slate-300 dark:drop-shadow-amber-50 h-120 lg:h-200 lg:mr-50 lg:w-150' />
            <div className='order-2 lg:order-1 w-75 flex justify-center items-center'>
                <button className='button-1 flex items-center gap-3 p-3'
                    onClick={() => navigate(-1)}> <FaArrowCircleLeft /> Click to go Back </button>
            </div>
        </div>
    )
}

export default Error