const response = require('../helpers/response');

require('dotenv').config();
const Wishlist = require('../models/wishlist').default;

const get = async (req, res) => {
    const { user_id } = req.params;

    if (!user_id) {
        return response.falseRequirement(res, 'user_id');
    }

    const wishlist = new Wishlist('', user_id);
    const doc = await wishlist.get();    
    return response.success(res, doc);
};

const upsert = async (req, res) => {
    const { user_id, book_id, title, thumbnail, author, rating } = req.body;
    if (!user_id) {
        return response.falseRequirement(res, 'user_id');
    }
    if (!book_id) {
        return response.falseRequirement(res, 'book_id');
    }

    const wishlist = new Wishlist('', user_id, book_id, title, thumbnail, author, rating);
    const doc = await wishlist.upsert();
    if (doc === null) {
        return response.falseRequirement(res, '', 'something wrong.');
    }

    return response.success(res, doc);
};



module.exports = {
    upsert,
    get
};