const bcrypt = require('bcrypt');
const { validationResult } = require("express-validator");
const HttpError = require("../model/http-error");
const User = require("../model/user");

// Get all users
const getUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find({}, "-password");
    } catch (err) {
        const error = new HttpError(
            "Fetching users failed, please try again later.",
            500
        );
        return next(error);
    }
    res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

// Signup new user
const signup = async (req, res, next) => {
    const errors = validationResult(req);

    // console.log(req.body);

    if (!errors.isEmpty()) {
        return next(
            new HttpError("Invalid inputs passed, please check your data.", 422)
        );
    }

    const { username, password, email, notificationFrequency, preferredUnits } = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        const error = new HttpError(
            "Signing up failed, please try again later.",
            500
        );
        return next(error);
    }

    if (existingUser) {
        const error = new HttpError(
            "User exists already, please login instead.",
            422
        );
        return next(error);
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 12);

    const createdUser = new User({
        username,
        password: hashedPassword,
        email,
        preferences: {
            notificationFrequency,
            preferredUnits,
        },
    });

    try {
        await createdUser.save();
    } catch (err) {
        console.error("Error during user save:", err);
        const error = new HttpError("Signing up failed, please try again.", 500);
        return next(error);
    }

    res.render("index");
};

// Login user
const login = async (req, res, next) => {
    const { email, password } = req.body;

    let existingUser;

    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        const error = new HttpError(
            "Logging in failed, please try again later.",
            500
        );
        return next(error);
    }

    if (!existingUser) {
        const error = new HttpError(
            "Invalid credentials, could not log you in.",
            401
        );
        return next(error);
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordValid) {
        const error = new HttpError(
            "Invalid credentials, could not log you in.",
            401
        );
        return next(error);
    }

    res.json({ message: "Logged in!" });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
