import User from "../models/user.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/token.js";

export const signup = async (req, res) => {
    try {
        const { fullName, userName, password, confirmPassword, gender} = req.body;
        if (password!==confirmPassword) {
            return res.status(400).json({ error: 'Password do not match' });
        }

        const user = await User.findOne({ userName });
        
        if (user) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        //Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`

        const newUser = new User({
            fullName,
            userName,
            password: hashedPassword,
            gender,
            profilepic: gender === 'Male'? boyProfilePic : girlProfilePic
        });

        if (newUser) {
            //jwt token
            generateTokenAndSetCookie(newUser._id,res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName,
                profilepic: newUser.profilepic
            });
        }
        else {
            res.status(400).json({ error: 'Invalid user data' });
        }
        
    } catch (error) {
        console.log("Error in signup comtroller",error.message);
        res.status(500).json({error:"Internal server error"})
    }
};

export const login = (req, res) => {
    console.log('login ');
}

export const logout = (req, res) => { 
    console.log('logout ');
}

