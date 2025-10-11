import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, lowercase: true },
    gender: { type: String, enum: ['male', 'female', 'other'], required: true },
    address: {
        country: String,
        state: String,
        district: String,
        city: String,
        pincode: Number,
    },
    linkedIn: { type: String, match: /^https?:\/\/(www\.)?linkedin\.com/ },
    gitHub: { type: String, match: /^https?:\/\/(www\.)?github\.com/ },
    portfolio: { type: String, match: /^https?:\/\/(www\.)?\.com/ },
    education: {
        university: String,
        institution: String,
        start: Date,
        end: { type: Date, default: null },
        place: String
    },
    experience: [{
        company: String,
        position: String,
        from: Date,
        to: { type: Date, default: null },
        description: String,
    }],
    skills: {
        professional: [String],
        soft: [String],
    },
    projects: [{
        title: String,
        details: String,
        link: { type: String, default: null },
    }],
    certifications: [{
        certificateName: String,
        provider: String
    }],
}, { timestamps: true })

const ResumeDB = mongoose.model('Resume_Collection', ResumeSchema)
export default ResumeDB