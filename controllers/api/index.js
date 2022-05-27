const router = require('express').Router();

const coffeeRoutes = require('./coffee-routes');

const bookRoutes = require('./book-routes');

router.use('/coffee', coffeeRoutes);
router.use('/book', bookRoutes);

module.exports = router;