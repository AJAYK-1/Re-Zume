import React from 'react'
import ResumePDF from './ResumePDF'
import { BlobProvider } from '@react-pdf/renderer'
import itemLoading from '../../assets/Animations/itemLoading.lottie'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

function BlobResume({ resume }) {
    return (
        <BlobProvider document={<ResumePDF resumeData={resume} />}>
            {({ url, loading }) =>
                loading ? (
                    <div> <DotLottieReact src={itemLoading} loop autoplay speed={3} /> </div>
                ) : url ? (
                    <iframe
                        src={url + '#view=FitH'}
                        alt='Resume preview'
                        className="w-full h-[200px] overflow-hidden border-none rounded-t-2xl hover:cursor-pointer" />
                ) : (
                    <div className='w-full h-[200px] dark:text-white flex justify-center items-center'> Preview not available </div>
                )}
        </BlobProvider>
    )
}

export default BlobResume