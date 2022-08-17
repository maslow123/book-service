require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const conn = 'mongodb+srv://maslow123:TxQQQiurkyrnffGz@cluster0.j0bumgs.mongodb.net/books-db?retryWrites=true&w=majority';
mongoose.connect(
    conn,
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    },(err) => {
        if (err) {
            console.log("error in connection", err);
        } else {
            console.log("mongodb is connected");
            
            const HTTP_PORT = process.env.PORT;

            app.listen(HTTP_PORT, () => {
                console.log(`Server listening on port ${HTTP_PORT}`);
            });
        }
    }
);

const wishlist = require('./routes/wishlist');


const prefix = '/api/v1/';
app.use(`${prefix}`, wishlist);

module.exports = app;