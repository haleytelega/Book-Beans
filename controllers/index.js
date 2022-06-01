
const router = require('express').Router();

const homeRoutes = require('./home-routes.js');
const coffeeRoutes = require('./addcoffee-routes');
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/coffeeshops', coffeeRoutes);
router.use('/api', apiRoutes);

module.exports = router;