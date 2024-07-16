import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    // Add logging to check the values
    console.log('Received signup request:', { username, email, password });

    // Ensure the required fields are defined
    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Username, email, and password are required' });
    }

    try {
        // Hash the password
        const hashedPassword = bcryptjs.hashSync(password, 10);
        console.log('Hashed Password:', hashedPassword);

        // Create a new user instance
        const newUser = new User({ username, email, password: hashedPassword });

        // Save the user to the database
        await newUser.save();
        res.status(201).json("User created successfully");
    } catch (error) {
        next(errorHandler(error));
    }
};
