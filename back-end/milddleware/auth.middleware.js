import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const authMiddleware = {
    verifyToken: async (req, res, next) => {
        const token = req.cookies.skillBridge;

        if (!token) {
            res.status(401).json({
                success: false,
                message: "You have to be logged in"
            });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);


            //fetch user details as per the id in the decode token
            const user = await User.findById(decoded.id);

            //make user datails available to all other controllers

            req.user = user;
            next();
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: " Something went wrong"
            });

        }
    },
    authorizeRole: async (role) => {
        return (req, res, next) => {
            if (res.user.role !== role) {
                return res.status(403).json({
                    success: false,
                    message: "Unauthorised operation"
                });

            }
            next();
        }
    }
}