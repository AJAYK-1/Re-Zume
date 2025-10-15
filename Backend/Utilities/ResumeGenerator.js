import PDFDocument from "pdfkit";
import fs from 'fs'
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const ResumeGenerator = async (resumeData) => {
    try {
        const { userId, name, summary, email, phone, gender,
            address, linkedIn, gitHub, portfolio, education,
            experience, skills, projects, certifications } = resumeData

        const __filename = fileURLToPath(import.meta.url)
        const __dirname = path.dirname(__filename)
        const dir = path.join(__dirname, '../Generated')

        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

        const fileName = `${name.split(' ').join('')}_${Date.now()}.pdf`
        const filePath = path.join(dir, fileName)

        const doc = new PDFDocument({ size: 'A4', margins: { left: 36, right: 36, top: 36, bottom: 36 } })
        const stream = fs.createWriteStream(filePath)
        doc.pipe(stream)

        doc.font('Times-Roman').fontSize(28).text(`${name}`, { align: 'center', })
        doc.moveDown(0.5)

        doc.font('Helvetica').fontSize(10).text(`${address.city}, ${address.district}, ${address.pincode}`, 140, 80, { continued: true })
        doc.text(' | ', { continued: true })
        doc.text(`${phone}`, { link: `tel:${phone}`, continued: true })
        doc.text(' | ', { continued: true })
        doc.fillColor('blue').text(`${email}`, { link: `mailto:${email}`, underline: true })
        doc.moveDown(0.6)

        if (linkedIn) {
            doc.fillColor('black').text('[ ', 150, 10, { fillColor: 'black', continued: true })
            doc.fillColor('blue').text('LinkedIn', { link: `${linkedIn}`, continued: true, underline: true })
            doc.fillColor('black').text(' ]', { fillColor: 'black', continued: true })
        }

        if (gitHub) {
            doc.fillColor('black').text('[ ', { fillColor: 'black', continued: true })
            doc.fillColor('blue').text('GitHub', { link: `${gitHub}`, continued: true, underline: true })
            doc.fillColor('black').text(' ]', { fillColor: 'black', continued: true })
        }

        if (portfolio) {
            doc.fillColor('black').text('[ ', { fillColor: 'black', continued: true })
            doc.fillColor('blue').text('Portfolio', { link: `${portfolio}`, continued: true, underline: true })
            doc.fillColor('black').text(' ]', { fillColor: 'black', continued: true })
        }

        doc.end()
        await new Promise((resolve, reject) => {
            stream.on('finish', resolve)
            stream.on('error', reject)
        })

        return fileName
    } catch (error) {
        console.log(error.message);
        return error.message
    }
}

export default ResumeGenerator