import { response } from "express"
import UserDB from "../Models/UserModel.js"

const resolvers = {
    Query: {
        users: async () => {
            const allUsersData = await UserDB.find()
            return allUsersData
        },
        userSignIn: async (_, args) => {
            try {
                const { email, password } = args
                const validUser = await UserDB.findOne({ email })
                if (!validUser) return response.status(404).json({ message: 'No user found...' })

                if (validUser.password === password)
                    return response.status(200).json({ message: 'Login Successful', data: validUser })

                return response.status(400).json({ message: 'Incorrect Username or Password' })
            } catch (error) {
                console.log(error.message);
                return response.status(500).json({ message: "Server Error" })
            }
        }
    },
    Mutation: {
        createUser: async (_, args) => {
            try {
                const { name, email, password } = args
                const userExists = await UserDB.findOne({ name })
                if (userExists) return response.status(409).json({ message: 'User already exists...' })
                const newUser = await UserDB.create({ name, email, password })
                await newUser.save()
            } catch (error) {
                console.log(error.message);
                return response.status(500).json({ message: "Server Error" })
            }
        }
    }
}

export default resolvers