import React from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { FiDownload } from 'react-icons/fi'
import ResumePDF from './ResumePDF'

function PDFDownloadButton({ resume, btnText = '', mini = true }) {
    return (
        <PDFDownloadLink
            document={<ResumePDF resumeData={resume} />}
            fileName={`${resume.name}_Resume.pdf`}>
            {({ loading }) =>
                loading ? (
                    <button className='button-2-mini'>...</button>
                ) : mini ?
                    <button className='button-2-mini'><FiDownload /> {btnText} </button> :
                    <button className='button-2'><FiDownload /> {btnText} </button>
            }
        </PDFDownloadLink>
    )
}

export default PDFDownloadButton