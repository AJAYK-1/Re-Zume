import mongoose, { Schema } from "mongoose";

const addressSchema = new mongoose.Schema({
    country: { type: String, required: true },
    state: { type: String, required: true },
    district: { type: String, required: true },
    city: { type: String, required: true },
    pincode: { type: Number, required: true },
})

const educationSchema = new mongoose.Schema({
    course: { type: String, required: true },
    university: { type: String, required: true },
    institution: { type: String, required: true },
    start: { type: String, required: true },
    end: { type: String, default: 'Ongoing' },
    place: { type: String, required: true }
})

const technicalSkillsSchema = new mongoose.Schema({
    frontend: { type: [String], required: true },
    backend: { type: [String], required: true },
    languages: { type: [String], required: true },
    databases: { type: [String], required: true },
    toolsAndDevOps: { type: [String], required: true },
    others: { type: [String], required: true },
})

const experienceSchema = new mongoose.Schema({
    company: { type: String, required: true },
    position: { type: String, required: true },
    place: { type: String, required: true },
    from: { type: String, required: true },
    to: { type: String, default: 'Ongoing' },
    description: { type: [String], required: true },
})

const projectsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    details: { type: String, required: true },
    link: { type: String, default: null },
})

const ResumeSchema = new mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User_Collection' },
    resumeType: { type: String, enum: ['Classic', 'Minimal', 'Modern', 'Professional'], default: 'Classic', required: true },
    name: { type: String, required: true },
    summary: { type: String, require: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, lowercase: true },
    gender: { type: String, enum: ['male', 'female', 'other'], required: true },
    address: { type: addressSchema, required: true },
    linkedIn: { type: String, match: /^https?:\/\/(www\.)?linkedin\.com/, default: null },
    gitHub: { type: String, match: /^https?:\/\/(www\.)?github\.com/, default: null },
    portfolio: { type: String, match: /^https?:\/\/(www\.)?.+$/, default: null },
    education: { type: educationSchema, required: true },
    experience: { type: [experienceSchema], default: [] },
    skills: {
        technical: { type: technicalSkillsSchema, required: true },
        soft: { type: [String], required: true },
    },
    projects: { type: [projectsSchema], default: [] },
    certifications: [{
        certificateName: { type: String, required: true },
        provider: { type: String, required: true }
    }],
}, { timestamps: true })

const ResumeDB = mongoose.model('Resume_Collection', ResumeSchema)
export default ResumeDB