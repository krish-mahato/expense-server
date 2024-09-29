// const app = require('./app');

// const PORT = process.env.PORT || 5000;

// // Directly start the Express app
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



const http = require('http');
const app = require("./app");

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT, (err) => {
    if (err) {
        console.error(`Error starting server: ${err.message}`);
        throw err; // Optionally re-throw if you want the process to exit
    } else {
        console.log(`Server is running on port ${PORT}`);
    }
});





// const http = require('http');
// const app = require("./app");

// const PORT = process.env.PORT || 5000;

// const server = http.createServer(app);

// server.listen(PORT, console.log(`server is running on port ${PORT}`));


