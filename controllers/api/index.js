const router = require('express').Router();

const coffeeRoutes = require('./coffee-routes.js');

const bookRoutes = require('./book-routes');

router.use('/coffee', coffeeRoutes);

module.exports = router;