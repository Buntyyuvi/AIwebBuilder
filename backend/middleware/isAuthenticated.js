import jwt from "jsonwebtoken"
import { User } from "../models/userModel.js"

export const isAuthenticated = async(req, res, next)=>{
    try {
        const token = req.cookies.token
        if(!token){
            return res.status(400).json({
                message:"Token Not Found"
            })
        }
        const decode = jwt.verify(token, process.env.SECRET_KEY)
        console.log(decode)
        req.user = await User.findById(decode.id)
        next()
    } catch (error) {
        return res.status(500).json({
            message:"Invalid Token"
        })
    }
}