const router = require('express').Router();

const coffeeRoutes = require('./coffee-routes.js');
const coffeeCommentsRoutes = require('./coffeecomments-routes');

const bookRoutes = require('./book-routes');

router.use('/coffee', coffeeRoutes);
router.use('/coffeeComments', coffeeCommentsRoutes)
router.use('/book', bookRoutes);

module.exports = router;