import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandler.js';
import User from '../models/userModel.js';

// Protect routes 
const protect = asyncHandler(async (req, res, next) => {
    let token;
    // Read the JWT from cookie
    token = req.cookies.jwt;
    
    console.log('Token:', token); // Debug statement

    if (!token) {
        return next(new Error("Not authorized, token missing"));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.userId).select('-password');
        if (!req.user) {
            return next(new Error("Not authorized, user not found"));
        }
        next();
    } catch (error) {
        return next(new Error("Not authorized, token invalid"));
    }
});

// Admin middleware 
const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(403);
        return next(new Error('Not authorized as admin'));
    }
}

export { protect, admin };
