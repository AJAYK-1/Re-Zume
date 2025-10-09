import UserDB from "../Models/UserModel.js"
import jwt from 'jsonwebtoken'

const resolvers = {
    Query: {
        users: async () => {
            const allUsersData = await UserDB.find()
            return allUsersData
        },
    },
    Mutation: {
        userSignUp: async (_, args) => {
            try {
                const { name, email, password } = args
                console.log(name, email, password);

                if (email === process.env.ADMIN_EMAIL)
                    return { success: false, message: 'User already exists...' }

                const userExists = await UserDB.findOne({ email })
                if (userExists)
                    return { success: false, message: 'User already exists...' }

                const newUser = await UserDB.create({ name, email, password })
                await newUser.save()
                return { success: true, message: 'User SignUp successful...' }
            } catch (error) {
                console.log(error.message);
                return { success: false, message: "Server Error" }
            }
        },
        userSignIn: async (_, args) => {
            try {
                const { email, password } = args

                if (email === process.env.ADMIN_EMAIL || password === process.env.ADMIN_PASSWORD) {
                    const token = jwt.sign({ role: 'Admin', email: process.env.ADMIN_EMAIL }, process.env.JWT_SECRET, { expiresIn: '1h' })
                    return { success: true, message: 'Redirecting to Admin Dashboard...', token }
                }

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
        }
    }
}

export default resolvers