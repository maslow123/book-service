require('dotenv').config();
const mongoose = require('mongoose');

const connStr = 'mongodb+srv://maslow123:TxQQQiurkyrnffGz@cluster0.j0bumgs.mongodb.net/books-db?retryWrites=true&w=majority'
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