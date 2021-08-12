const userModel = require('../models/userModel');
const registerLoginValidations = require('../validation/register');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");
/**
 * Add a new user
 * @method POST
 * @route /users/register
 * @payload body.user
 * @param {Request} req 
 * @param {Response} res 
 * @returns json HTTP Response
 */
async function register(req, res) {
    // Form validation
    const { errors, isValid } = registerLoginValidations(req.body.user);
    //vValidation Check
    if (!isValid) {
        return res.status(400).json(errors);
    }
    // Find user by email
    await userModel.findOne({ email: req.body.user.email }, (err, user) => {
        if (err) throw err;
        if (user) {// Check if user exists
            return res.status(400).json({ email: "Email already exists" });
        }
        else {
            // Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(req.body.user.password, salt, (err, hash) => {
                    if (err) throw err;
                    req.body.user.password = hash;
                    userModel.insertMany(req.body.user, (err) => {
                        if (err) {
                            return res.status(400).json({ success: false, error: err })
                        };
                        res.status(201).json({ success: true, message: `registered of ${req.body.user.email} new user` })
                    })
                });
            });
        }
    });
}
/**
 * Find an exist user
 * @method POST
 * @route /users/login
 * @payload body.user
 * @param {Request} req 
 * @param {Response} res 
 * @returns json HTTP Response with JWT
 */
async function login(req, res) {
    const { errors, isValid } = registerLoginValidations(req.body.user, true);
    if (!isValid) { //Validation Check
        return res.status(400).json(errors);
    }
    const { email, password } = req.body.user;
    // Find user by email
    await userModel.findOne({ email }, (err, user) => {
        if (err) throw err;
        if (!user) {// Check if user exists
            return res.status(404).json({ emailNotFound: "Email not found" });
        }
        // Check password
        /** bcrypt.compare() between the password from 
         * the request.body and the password form the user 
         * from the database
         */
        bcrypt.compare(password, user.password, (err, isMatch) => {           
            if (isMatch) {// User is matched                      
                const payload = {// Create JWT Payload for the JWT
                    id: user.id,
                    name: user.name,
                    email: user.email
                };
                /** jwt.sign() create a token based on the payload,
                 * keys.secretOrKey and expiration time
                */
                jwt.sign(payload, keys.secretOrKey, { expiresIn: 31556926 }, (err, token) => {
                    res.json({ success: true, token: "Bearer " + token, user: { name: user.name, email: user.email } });
                });
            }
            else {
                return res.status(400).json({ passwordIncorrect: "Password incorrect" });
            }
        })
    });
}
module.exports =
{
    register,
    login
};