const router = require('express').Router();

const coffeeRoutes = require('./coffee-routes.js');

router.use('/coffee', coffeeRoutes);

module.exports = router;