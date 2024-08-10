import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => { 
    // Generate JWT token
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '15d'
    });
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production'? true : false  // Set secure to true in production environment only to ensure secure cookies are sent over HTTPS.  // Set secure to false in development environment to allow HTTP cookies.  // In development, cookies are not sent over HTTPS, so this line is unnecessary.  // In production, cookies are sent over HTTPS, so this line is necessary.  // Note: This code will not work correctly if the server is running
    });
}

export default generateTokenAndSetCookie;