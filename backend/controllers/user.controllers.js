import User from "../models/user.js";

export const getUsersForSidebar = async (req, res) => { 
    try {

        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find(
            // Exclude the logged in user from the list of users
           //if want all users remove this it shows loged user also (self.user)
            { _id: { $ne: loggedInUserId } }
        ).select("-password");

        res.status(200).json(filteredUsers)

    } catch (error) {
        console.log("Error in getUsersForSidebar controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};