const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
// const { registerUser } = require("./controllers/users/usersCtrl");
const userRoute = require("./routes/users/userRoute");
const {errorHandler, notFound } = require("./middlewares/errorMiddleware"); // Ensure this path is correct

const app = express();

//env
dotenv.config();

const logger = (req, res, next) => {
    console.log("am a logger");
    next();
};

app.use(logger);

//dbConnect
dbConnect();

//middleware
app.use(express.json());

// routes
app.use("/api/users", userRoute);

//error
app.use(notFound);
app.use(errorHandler);

module.exports = app;




// const express = require("express");
// const dbConnect = require("./config/dbConnect");
// const { registerUser } = require("./controllers/users/usersCtrl");
// const userRoute = require("./routes/users/userRoute");


// const app = express();

// const logger = (req, res, next)=>{
//     console.log("am a logger");
//     next();
// };

// app.use(logger);

// //dbConnect
// dbConnect();

// //middleware
// app.use(express.json());

// // routes

// app.use("/", userRoute);
// // app.post("/register", registerUser);
// // app.post("/login", loginCtrl);
// // app.get('/users', registerUser);



// // app.post('/login', (req, res) => {
// //     res.json({user: "admin"});
// // });

// // app.delete('/:id', (req, res) => {
// //     res.json({user: "admin"});
// // });

// // app.put('/:id', (req, res) => {
// //     res.json({user: "admin"});
// // });

// //error
// app.use(errorHandler);

// //income
// //expenses

// module.exports = app;