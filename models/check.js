const  mongoose = require('mongoose');
const  Wishlist = require('./wishlist_model.js');
const conn = process.env.MONGODB_URL_CONNECTION;
mongoose.connect(
    conn,
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }
);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
const  a1 = db.once('open',function(){
  Wishlist.find({},{},function (err, wishlist) {
    mongoose.connection.close();
  })
});