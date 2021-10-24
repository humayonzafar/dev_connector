const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(db, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        console.log(`mongo db connected: ${conn.connection.host}`);
    } catch (err) {
        console.log(err.message, 'error connecting db');
        process.exit(1); //exit process with failure
    }
}

module.exports = connectDB;