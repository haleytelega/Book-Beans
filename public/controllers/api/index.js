const router = require('express').Router();

const coffeeRoutes = require('./coffee-routes.js');
const coffeeCommentsRoutes = require('./coffeecomments-routes');
const bookRoutes = require('./book-routes');
const BookCommentsRoutes = require('./bookcomments-routes');
const userRoutes = require('./user-routes');


router.use('/coffee', coffeeRoutes);
router.use('/coffeeComments', coffeeCommentsRoutes)
router.use('/book', bookRoutes);
router.use('/bookComments', BookCommentsRoutes);
router.use('/users', userRoutes)

module.exports = router;