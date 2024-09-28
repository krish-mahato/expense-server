const expressAsyncHandler = require("express-async-handler");
const User = require("../../models/User");

//register

const registerUser = expressAsyncHandler(async (req, res) => {

        const {email, firstname, lastname, password} = req?.body;
        // check if the user is already registered
        const userExists = await User.findOne({email});
        if (userExists) throw new Error("user already exists");

        try {            
            // if(userExists) {
            //     res.json("user Exists");
            // }
            const user = await User.create({email, firstname, lastname, password});
            res.status(200).json(user);
    
        } catch (error) {
            res.json(error);
    
        }
            // res.json({user: "admin"});
    });


// fetch all users

const fetchUsersCtrl = expressAsyncHandler(async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.json(error);
    }
});


// const registerUser = async(req, res) => {

//     const {email, firstname, lastname, password} = req?.body;
//     try {
//         // check if the user is already registered
//         const userExists = await User.findOne({email});

//         if (userExists) throw new Error("user already exists");
//         // if(userExists) {
//         //     res.json("user Exists");
//         // }
//         const user = await User.create({email, firstname, lastname, password});
//         res.status(200).json(user);

//     } catch (error) {
//         res.json(error);

//     }
//         // res.json({user: "admin"});
// };


module.exports = {registerUser, fetchUsersCtrl};