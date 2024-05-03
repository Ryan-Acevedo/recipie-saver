import User from "../models/user.model.js";
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";

// register new user
async function register(req, res) {
    try {
        const newUser = await User.create(req.body)
        const userToken = jwt.sign(
            {userId:newUser._id, username:newUser.username},
            process.env.SECRET_KEY,
            {expiresIn:'2h'}
            )
        res.cookie('userToken', userToken, {httpOnly:true, maxAge: 2*60*60*1000})
        return res.status(201).json(newUser)
    } catch (err) {
        console.log('ERROR', err);
        return res.status(500).json(err)
    }
};

// login existing user by email
async function login(req, res) {
    const { email, password } = req.body;
    const potentialUser = await User.findOne({ email: email });
    if (!potentialUser) {
        return res.status(404).json({ message: "Invalid Credentials!" });
    }
    const potentialPass = await bcrypt.compare(password, potentialUser.password);
    if (!potentialPass) {
        return res.status(400).json({ message: "Invalid Credentials!" });
    }
    const userToken = jwt.sign(
        {
            userId: potentialUser._id,
            email: potentialUser.email,
        },
        process.env.SECRET_KEY,
        { expiresIn: "2h" }
    );
    res.cookie("userToken", userToken, {
        httpOnly: true,
        maxAge: 2 * 60 * 60 * 1000,
    });
    return res.status(201).json(potentialUser);
};

// logout current user
async function logout(req, res) {
    res.clearCookie("userToken");
    return res.status(200).json({ message: "Logged out!" });
};

//get logged in user by id
async function getLoggedUser(req, res) {
    try {
        const decodedJwt = jwt.decode(req.cookies.userToken, { complete: true });
        const userId = decodedJwt.payload.userId;
        const loggedUser = await User.findById(userId);;
        return res.status(200).json(loggedUser);
    } catch (err) {
        return res.status(500).json(err);
    }
}

export {
    login,
    logout,
    register,
    getLoggedUser
}