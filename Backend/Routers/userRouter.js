import express from "express";
import { Login, RegisterUser } from "../Controllers/userController.js";
const userRouter = express.Router()

userRouter.post('/register-newuser', RegisterUser)
userRouter.post('/login', Login)

export default userRouter