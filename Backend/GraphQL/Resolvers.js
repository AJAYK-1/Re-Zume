import UserDB from "../Models/UserModel.js"

const resolvers = {
    Query: {
        users: async () => {
            const allUsersData = await UserDB.find()
            return allUsersData
        },
        user: async (parent, args) => {
            const id = args.id
            const userById = await UserDB.findById({ id })
            return userById
        }
    },
    Mutation: {
        createUser: async (_, args) => {
            const { name, email, password } = args
            const newUser = await UserDB.create({ name, email, password })
            await newUser.save()
        }
    }
}

export default resolvers