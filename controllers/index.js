
const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const coffeeRoutes = require('./addcoffee-routes');
const bookRoutes = require('./addclub-routes');
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/coffeeshops', coffeeRoutes);
router.use('/bookclubs', bookRoutes)
router.use('/api', apiRoutes);

module.exports = router;