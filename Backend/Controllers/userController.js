import UserDB from "../Models/UserModel.js";
import jwt from 'jsonwebtoken'

export const RegisterUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const userPresent = await UserDB.findOne({ email })
        if (userPresent) return res.status(409).json({ message: 'User Already Exists.' })

        const newUser = await UserDB.create({ name, email, password })
        await newUser.save()
        return res.status(201).json({ message: 'Registration successful.' })
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: 'Internal Server Error' })
    }
}

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign({ email: email, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' })
            return res.status(200).json({ message: 'Login successful, Redirecting to Admin Dashboard.', token: token })
        }

        const validUser = await UserDB.findOne({ email })
        if (!validUser) return res.status(404).json({ message: 'User not found.' })
        if (validUser.password !== password) return res.status(401).json({ message: 'Incorrect Password.' })

        const token = jwt.sign({ email: email, role: 'user' }, process.env.JWT_SECRET, { expiresIn: '1h' })
        return res.status(200).json({ message: 'Login Successful', token: token })
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: 'Internal Server Error' })
    }
}
