import UserDB from "../Models/UserModel"

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
    }
}