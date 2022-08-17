const { Router } = require('express');
const router = Router();
const controllers = require('../controllers/wishlist');
const slug = '/wishlist';
router.post(`${slug}/upsert`, controllers.upsert);
router.get(`${slug}/:user_id`, controllers.get);

module.exports = router;