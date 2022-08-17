require('dotenv').config();
const mongoose = require('mongoose');

const connStr = process.env.MONGODB_URL_CONNECTION;
mongoose.connect(
    connStr,
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }
);

const conn = mongoose.connection;
conn.on('connected', () => {
    console.log('mongodb is connected');
});
conn.on('disconnected', () => {
    console.log('mongodb is disconnected');
});
conn.on('error', console.error.bind(console, 'connection error: '));

module.exports = mongoose;