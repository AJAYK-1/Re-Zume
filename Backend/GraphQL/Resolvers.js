import ResumeDB from "../Models/ResumeModel.js"
import UserDB from "../Models/UserModel.js"
import jwt from 'jsonwebtoken'
import ResumeGenerator from "../Utilities/ResumeGenerator.js"

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
        myResumes: async (_, args) => {
            try {
                const userId = args.userId
                const fetchedResumes = await ResumeDB.find({ userId })

                return fetchedResumes
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
                console.log(name, email, password);

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

                const token = jwt.sign({ role: 'User', email: validUser.email }, process.env.JWT_SECRET, { expiresIn: '1h' })
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
        createResume: async (_, args) => {
            try {
                const { userId, name, summary, email, phone, gender,
                    address, linkedIn, gitHub, portfolio, education,
                    experience, skills, projects, certifications } = args.resume

                const fileName = await ResumeGenerator(args.resume)
                const newResume = await ResumeDB.create({
                    userId, name, summary, email, phone, gender,
                    address, linkedIn, gitHub, portfolio, education,
                    experience, skills, projects, certifications, resumefile: fileName
                })

                if (newResume)
                    return { success: true, message: 'Resume created successfully...' }
                return { success: false, message: 'Error creating Resume. Please try again...' }
            } catch (error) {
                console.log(error.message);
                return { success: false, message: "Server Error" }
            }
        },
    }
}

export default resolvers