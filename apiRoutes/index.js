const router = require('express').Router();

const addRoutes = require('./bookRoutes/addRoutes');
const commentRoutes = require('./bookRoutes/commentRoutes');

router.use('/add', addRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
