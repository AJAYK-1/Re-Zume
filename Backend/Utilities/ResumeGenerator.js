import PDFDocument from "pdfkit";
import fs from 'fs'
import path from "path";
import { fileURLToPath } from "url";

const ResumeGenerator = async (resumeData) => {
    try {
        const { name, summary, email, phone,
            address, linkedIn, gitHub, portfolio, education,
            experience: exp, skills, projects, certifications } = resumeData

        const __filename = fileURLToPath(import.meta.url)
        const __dirname = path.dirname(__filename)
        const dir = path.join(__dirname, '../Generated')

        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

        const fileName = `${name.split(' ').join('')}_${Date.now()}.pdf`
        const filePath = path.join(dir, fileName)

        const doc = new PDFDocument({ size: 'A4', margins: { left: 50, right: 50, top: 36, bottom: 36 } })
        const stream = fs.createWriteStream(filePath)
        doc.pipe(stream)

        doc.font('Times-Roman').fontSize(28).text(`${name}`, { align: 'center', })
        doc.moveDown(0.5)

        doc.font('Helvetica').fontSize(10).text(`${address.city}, ${address.district}, ${address.pincode}`, 140, 80, { continued: true })
            .text(' | ', { continued: true })
            .text(`${phone}`, { link: `tel:${phone}`, continued: true })
            .text(' | ', { continued: true })
            .fillColor('blue').text(`${email}`, { link: `mailto:${email}`, underline: true })
        doc.moveDown(0.6)

        if (linkedIn) {
            doc.fillColor('black').text('[ ', 200, 100, { fillColor: 'black', continued: true })
            doc.fillColor('blue').text('LinkedIn', { link: `${linkedIn}`, continued: true, underline: true })
            doc.fillColor('black').text(' ]    ', { fillColor: 'black', continued: true, underline: false })
        }

        if (gitHub) {
            doc.fillColor('black').text('[ ', { fillColor: 'black', continued: true })
            doc.fillColor('blue').text('GitHub', { link: `${gitHub}`, continued: true, underline: true })
            doc.fillColor('black').text(' ]    ', { fillColor: 'black', continued: true, underline: false })
        }

        if (portfolio) {
            doc.fillColor('black').text('[ ', { fillColor: 'black', continued: true })
            doc.fillColor('blue').text('My Portfolio', { link: `${portfolio}`, continued: true, underline: true })
            doc.fillColor('black').text(' ]', { fillColor: 'black', continued: false, underline: false })
            doc.moveDown(1)
        }

        doc.text(`${summary}`, 50, 140, { align: 'justify' })


        doc.text('')
        doc.moveDown(1)
        doc.font('Helvetica-Bold').fontSize(16).text(`EXPERIENCE`)
        doc.moveDown(0.3)
        exp.map((exp) => {
            doc.fontSize(10).text(`${exp.position}`)
            doc.moveDown(0.3)
            doc.text(`${exp.company} | ${exp.place} | ${exp.from.toString().split('-').reverse().join('/')} - ${exp.to === null ? 'Ongoing' : exp.to.toString().split('-').reverse().join('/')}`)
            doc.moveDown(0.3)
            const desc = exp.description
                .split('. ')
                .map(p => (p.trim().endsWith('.') ? p : p + '.'))
            doc.font('Helvetica').list(desc, { bulletRadius: 2, textIndent: 15, bulletIndent: 15, lineGap: 4 })
        })

        doc.text('')
        doc.moveDown(1)
        doc.font('Helvetica-Bold').fontSize(16).text(`PROFESSIONAL SKILLS`, { align: 'left' })
        doc.moveDown(0.3)
        doc.circle(doc.x + 2, doc.y + 3, 2).fill()
        doc.text(' ', { continued: true, indent: 10 })
        skills.professional.map((pro, index) => {
            doc.font('Helvetica').fontSize(10).text(`${pro}${index < skills.professional.length - 1 ? ', ' : '. '} `, { continued: true })
        })

        doc.text('')
        doc.moveDown(2)
        doc.font('Helvetica-Bold').fontSize(16).text(`SOFT SKILLS`, { align: 'left' })
        doc.moveDown(0.3)
        doc.circle(doc.x + 2, doc.y + 3, 2).fill()
        doc.text(' ', { continued: true, indent: 10 })
        skills.soft.map((s, i) => {
            doc.font('Helvetica').fontSize(10).text(`${s}${i < skills.soft.length - 1 ? ', ' : '.'} `, { continued: true })
        })

        doc.text('')
        doc.moveDown(2)
        doc.font('Helvetica-Bold').fontSize(16).text(`EDUCATION`, { align: 'left' })
        doc.moveDown(0.3)
        doc.fontSize(10).text(`${education.course}`)
        doc.moveDown(0.3)
        doc.font('Helvetica').text(`${education.university} | ${education.institution}, ${education.place} | ${education.start.toString().split('-').reverse().join('/')} - ${education.end !== null ? education.end.toString().split('-').reverse().join('/') : 'Ongoing'}`)

        doc.text('')
        doc.moveDown(1)
        doc.font('Helvetica-Bold').fontSize(16).text(`PROJECTS`, { align: 'left' })
        doc.moveDown(0.3)

        projects.map(proj => {
            doc.circle(doc.x + 2, doc.y + 3, 2).fill()
            doc.font('Helvetica-Bold').fontSize(10).text(`${proj.title}:`, { continued: true, indent: 15 })
                .font('Helvetica').text(`${proj.details}`, doc.x + 16, doc.y, { continued: true, align: 'justify' })

            proj.link != null && doc.text(` [ `, { continued: true })
                .fillColor('blue').text(`Project Link`, { link: `${proj.link}`, continued: true })
                .fillColor('black').text(` ]`)
            doc.moveDown(1)
        })

        doc.text('')
        doc.moveDown(1)
        doc.font('Helvetica-Bold').fontSize(16).text(`CERTIFICATIONS AND WORKSHOPS`, { align: 'left' })
        doc.moveDown(0.3)
        const cert = certifications.map(cert => `${cert.certificateName} — ${cert.provider}`)
        doc.font('Helvetica').fontSize(10).list(cert, { bulletRadius: 2, textIndent: 15, bulletIndent: 15, lineGap: 4 })

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