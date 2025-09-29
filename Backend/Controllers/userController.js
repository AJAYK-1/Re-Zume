import UserDB from "../Models/UserModel.js";

export const RegisterUser = async (req, res) => {
    try {
        const newUser = new UserDB({ name: 'John', email: 'john@gmail.com' })
        await newUser.save()
        console.log(newUser);
    } catch (error) {
        console.log(error.message);
    }
}
