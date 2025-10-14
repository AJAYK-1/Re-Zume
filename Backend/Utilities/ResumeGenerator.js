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

        const doc = new PDFDocument()
        const stream = fs.createWriteStream(filePath)
        doc.pipe(stream)

        doc.fontSize(25).text(name, { align: 'center' })

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