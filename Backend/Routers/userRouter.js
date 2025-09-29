import express from "express";
import { RegisterUser } from "../Controllers/userController.js";
const userRouter = express.Router()

userRouter.get('/register-newuser', RegisterUser)

export default userRouter