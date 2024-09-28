const mongoose = require("mongoose");

//mongodb+srv://krishnendu21:<password>@expenses-tracker.ozsxb.mongodb.net/
const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            // useCreateIndex: true,
            // useFindAndModifyIndex: false,
            // useUnifiedTopology: true,
            // useNewUrlParser: true,

            autoIndex: true,
        });
        console.log("DB connection successful");
    } catch (error) {
        console.log(`Error ${error.message}`);
    }
};

module.exports = dbConnect;
