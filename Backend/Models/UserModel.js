import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
}, { timestamps: true })

const UserDB = mongoose.model('User_Collection', UserSchema)
export default UserDB