const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

//schema

const userSchema = mongoose.Schema({
    firstname:{
        require: [true, "First name is required"],
        type: String,
    },
    lastname:{
        require: [true, "last name is required"],
        type: String,
    },
    email: {
        require: [true, "email is required"],
        type: String,
    },
    password: {
        require: [true, "password is required"],
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
},

{
    timestamps: true,
}
);


// hash password
userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) {
        next();
    }
    // console.log(this);
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});


//compile schema into models

const User = mongoose.model('User', userSchema);
module.exports = User;

// module.exports = User;

// const user = new User({