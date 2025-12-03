import ResumeDB from "../Models/ResumeModel.js"
import UserDB from "../Models/UserModel.js"
import jwt from 'jsonwebtoken'
import ResumeGenerator from "../Utilities/ResumeGenerator.js"
import OpenAI from "openai"

const resolvers = {
    Query: {
        users: async () => {
            try {
                const allUsersData = await UserDB.find()
                if (allUsersData.length === 0)
                    return { success: false, message: 'Error Fetching user data...' }
                return { success: true, message: 'Data found...', user: allUsersData }
            } catch (error) {
                console.log(error.message);
                return { success: false, message: "Server Error" }
            }
        },
        myResumes: async (_, args, context) => {
            try {
                if (!context.isAuthenticated) return { success: false, message: 'Unauthorised user...' }

                const { userId, first = 6, after } = args
                const query = { userId }

                if (after) query._id = { $gt: after }

                const fetchedResumes = await ResumeDB.find(query).sort({ _id: 1 }).limit(first + 1)

                const hasNextPage = fetchedResumes.length > first
                const edges = fetchedResumes.slice(0, first).map((resume) => ({
                    cursor: resume._id,
                    node: resume
                }))

                return {
                    edges,
                    pageInfo: {
                        endCursor: edges.length > 0 ? edges[edges.length - 1].cursor : null,
                        hasNextPage
                    }
                }
            } catch (error) {
                console.log(error.message);
                return { success: false, message: "Server Error" }
            }
        }
    },
    Mutation: {
        userSignUp: async (_, args) => {
            try {
                const { name, email, password } = args

                if (email === process.env.ADMIN_EMAIL)
                    return { success: false, message: 'Account already exists...' }

                const userExists = await UserDB.findOne({ email })
                if (userExists)
                    return { success: false, message: 'Account already exists...' }

                const newUser = await UserDB.create({ name, email, password })
                if (newUser)
                    return { success: true, message: 'SignUp successful...' }
                return { success: false, message: 'SignUp failed. Please try again...' }
            } catch (error) {
                console.log(error.message);
                return { success: false, message: "Server Error" }
            }
        },
        userSignIn: async (_, args) => {
            try {
                const { email, password } = args

                const validUser = await UserDB.findOne({ email })
                if (!validUser)
                    return { success: false, message: 'No user found...' }

                if (validUser.password !== password)
                    return { success: false, message: 'Incorrect Username or Password' }

                const token = jwt.sign({ role: 'User', id: validUser.id }, process.env.JWT_SECRET, { expiresIn: '1h' })
                return { success: true, message: 'Login Successful', token }
            } catch (error) {
                console.log(error.message);
                return { success: false, message: "Server Error" }
            }
        },
        adminLogin: async (_, args) => {
            try {
                const { name, password } = args
                if (name !== process.env.ADMIN_ID || password !== process.env.ADMIN_PASSWORD)
                    return { success: false, message: 'Admin Login Success, Redirecting to admin dashboard...' }

                const token = jwt.sign({ role: 'Admin', email: process.env.ADMIN_ID }, process.env.JWT_SECRET, { expiresIn: '1h' })
                return { success: true, message: 'Admin Login Success, Redirecting to admin dashboard...', token: token }
            } catch (error) {
                console.log(error.message);
                return { success: false, message: "Server Error" }
            }
        },
        createResume: async (_, args, context) => {
            try {
                if (!context.isAuthenticated) return { success: false, message: 'Unauthorised User...' }

                const { userId, name, summary, email, phone, gender,
                    address, linkedIn, gitHub, portfolio, education,
                    experience, skills, projects, certifications } = args.resume

                experience.map((exp) => {
                    exp.from = new Date(exp.from).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
                    exp.to = new Date(exp.to).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
                    exp.description = exp.description.split('. ').map((desc) =>
                        desc.endsWith('.') ? desc : desc += '.'
                    )
                })

                education.start = new Date(education.start).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
                education.end = new Date(education.end).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

                const newResume = await ResumeDB.create({
                    userId, name, summary, email, phone, gender,
                    address, linkedIn, gitHub, portfolio, education,
                    experience, skills, projects, certifications
                })

                if (newResume)
                    return { success: true, message: 'Resume created successfully...' }
                return { success: false, message: 'Error creating Resume. Please try again...' }
            } catch (error) {
                console.log(error.message);
                return { success: false, message: "Server Error" }
            }
        },
        deleteResume: async (_, args, context) => {
            try {
                if (!context.isAuthenticated) return { success: false, message: 'Unauthorised User...' }

                const { id } = args
                console.log(id);

                await ResumeDB.deleteOne({ _id: id })
                return { success: true, message: 'Resume deleted' }
            } catch (error) {
                console.log(error.message);
                return { success: false, message: "Server Error" }
            }
        },
        finalResume: async (_, args, context) => {
            try {
                if (!context.isAuthenticated) return { success: false, message: 'Unauthorised User...' }

                const { userId, name, summary, email, phone, gender,
                    address, linkedIn, gitHub, portfolio, education,
                    experience, skills, projects, certifications } = args.resume

                const client = new OpenAI({
                    apiKey: process.env.OPENAI_API_KEY,
                })

                const response = await client.responses.create({
                    model: 'gpt-5',
                    instructions: '',
                    input: '',
                })

            } catch (error) {
                console.log(error.message);
                return { success: false, message: "Server Error" }
            }
        }
    }
}

export default resolvers