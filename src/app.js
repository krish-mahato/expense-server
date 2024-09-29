const express = require('express');
const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler'); // Import asyncHandler
const app = express();
require('dotenv').config(); // Load environment variables from .env file

// Middleware for JSON parsing
app.use(express.json());

// MongoDB connection setup
const DB_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/expenses_tracker';

mongoose.connect(DB_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    throw error; // This will propagate the error to the server-level error handler
  });

// Define routes
app.get('/', (req, res) => {
    console.log('Root route accessed');
  res.send('Welcome to the Expenses Tracker API!');
});

// Example route for expenses
app.get('/expenses', asyncHandler(async (req, res) => {
  // You would typically fetch expenses from your database here
  console.log('Expenses route accessed');
  res.json({ msg: 'Expenses route working!' });
}));

// 404 handler for undefined routes
app.use((req, res, next) => {
  res.status(404).json({ msg: 'Not Found - ' + req.originalUrl });
});

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ msg: 'Something went wrong!', error: err.message });
});

module.exports = app;






// const express = require('express');
// const mongoose = require('mongoose');
// const asyncHandler = require('express-async-handler'); // Import asyncHandler
// const app = express();
// require('dotenv').config(); // Load environment variables from .env file

// // Middleware for JSON parsing
// app.use(express.json());

// // MongoDB connection setup
// const DB_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/expenses_tracker';

// mongoose.connect(DB_URI)
//   .then(() => {
//     console.log('MongoDB connected successfully');
//   })
//   .catch((error) => {
//     console.error('MongoDB connection error:', error);
//     throw error; // This will propagate the error to the server-level error handler
//   });

// // Define routes
// app.get('/', (req, res) => {
//   res.send('Welcome to the Expenses Tracker API!');
// });

// // Example route for expenses
// app.get('/expenses', asyncHandler(async (req, res) => {
//   // You would typically fetch expenses from your database here
//   res.json({ msg: 'Expenses route working!' });
// }));

// // 404 handler for undefined routes
// app.use((req, res, next) => {
//   res.status(404).json({ msg: 'Not Found - ' + req.originalUrl });
// });

// // Error handler middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ msg: 'Something went wrong!', error: err.message });
// });

// module.exports = app;










// const express = require('express');
// const app = express();

// // Middleware for JSON parsing
// app.use(express.json());

// // Define your routes here
// app.get('/', (req, res) => {
//   res.send('Welcome to the Expenses Tracker API!');
// });

// // Other routes (e.g., for expenses)
// app.get('/expenses', (req, res) => {
//   res.json({ msg: 'Expenses route working!' });
// });

// // 404 handler
// app.use((req, res, next) => {
//   res.status(404).json({ msg: 'Not Found - ' + req.originalUrl });
// });

// module.exports = app;








// const express = require("express");
// const dotenv = require("dotenv");
// const dbConnect = require("./config/dbConnect");
// // const { registerUser } = require("./controllers/users/usersCtrl");
// const userRoute = require("./routes/users/userRoute");
// const {errorHandler, notFound } = require("./middlewares/errorMiddleware"); // Ensure this path is correct

// const app = express();

// //env
// dotenv.config();

// const logger = (req, res, next) => {
//     console.log("am a logger");
//     next();
// };

// app.use(logger);

// //dbConnect
// dbConnect();

// //middleware
// app.use(express.json());

// // routes
// app.use("/api/users", userRoute);

// //error
// app.use(notFound);
// app.use(errorHandler);

// module.exports = app;




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