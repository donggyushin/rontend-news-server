import User from "../models/user";
import { generateJwt } from '../utils/jsonwebtoken';

export const login = async (req, res) => {
    const { email, password } = req.body
    // Find user with email
    let user = null
    try {
        user = await User.findOne({
            where: {
                email
            }
        })
    } catch (err) {
        // Fail to find a user with email
        res.json({
            ok: false,
            token: null,
            message: "Fail to find a user with that email"
        })
    }


    // compare password
    const checkPassword = user.password === password


    if (checkPassword) {
        // If password correct, return token,
        // TODO: generate token with user's id
        const userId = user.id
        const token = await generateJwt(userId);
        if (token == null) {
            res.json({
                ok: false,
                token,
                message: "Fail to login with no clue."
            })
        } else {
            res.json({
                ok: true,
                token,
                message: null
            })
        }


    } else {
        // Else return error message
        res.json({
            ok: false,
            token: null,
            message: "Wrong password"
        })
    }


}

export const newAccount = (req, res) => {

    console.log("req:", req);

    const { firstName,
        lastName,
        email,
        password } = req.body;



    // Find user by email
    User.findOrCreate({
        where: {
            email
        },
        defaults: {
            firstName,
            lastName,
            password
        }
    }).then(([user, created]) => {
        if (created) {
            // Else, create new user and send no error message. 
            res.json({
                ok: true,
                error: null
            })
        } else {
            // If user found, send error message, "Already exist an account with that email"
            res.json({
                ok: false,
                error: "Already exist an account with that email"
            })
        }
    }).catch((err) => {
        res.json({
            ok: false,
            error: "Fail to make new account. Please check your"
        })
    })

}