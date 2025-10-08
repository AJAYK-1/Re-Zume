import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    // address: {
    //     city: String,
    //     district: String,
    //     state: String,
    //     pincode: Number
    // },
}, { timestamps: true })

const UserDB = mongoose.model('User_Collection', UserSchema)
export default UserDB