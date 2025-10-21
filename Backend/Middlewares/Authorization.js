import jwt from "jsonwebtoken";

export const Authorization = async (request) => {
    try {
        const authHeader = request.headers.authorization || ''
        
        if (!authHeader.startsWith('Bearer '))
            return { user: null, isAuthenticated: false }

        const token = authHeader.split(' ')[1]
        if (!token) return { user: null, isAuthenticated: false }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        return { user: decodedToken, isAuthenticated: true }
    } catch (error) {
        console.log(error.message);
        return { user: null, isAuthenticated: false }
    }
}