const  mongoose = require('mongoose');
const  Wishlist = require('./wishlist_model.js');
const connStr = 'mongodb+srv://maslow123:TxQQQiurkyrnffGz@cluster0.j0bumgs.mongodb.net/books-db?retryWrites=true&w=majority'
mongoose.connect(
    connStr,
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