const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
    user_id: String,
    book_id: String,
    title: String,
    thumbnail: String,
    author: String,
    rating: Number
});

module.exports = mongoose.model('wishlists', wishlistSchema);  