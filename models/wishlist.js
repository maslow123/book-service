const DBTable = require('./dbtable').default;
const WishlistModel = require('./wishlist_model.js');

exports.default = class Wishlist extends DBTable {
    constructor(
        id = '', 
        user_id = '',
        book_id = '',
        title = '',
        thumbnail = '',
        author = '',
        rating = '',

    ) {
        super(id);
        this.user_id = user_id;
        this.book_id = book_id;
        this.title = title;
        this.thumbnail = thumbnail;
        this.author = author;
        this.rating = rating; 
    }

    get = async () => {
        const resp = await WishlistModel.find({ user_id: this.user_id });        

        return resp;
    }

    upsert = async () => {
        const wishlist = {
            user_id: this.user_id,
            book_id: this.book_id,
            title: this.title,
            thumbnail: this.thumbnail,
            author: this.author,
            rating: this.rating,
            wishlist: true
        };

        const wl = new WishlistModel(wishlist);
        const delResp = await WishlistModel.find({ book_id: wishlist.book_id }).deleteMany();

        if (delResp?.deletedCount > 0) {
            return wishlist
        }
    
        await wl.save();

        return wishlist
    }
}