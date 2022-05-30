const router = require('express').Router();
const { User, Coffee, CoffeeCommits } = require('../../models');

router.get('/', (req, res) => {
    User.findAll({
        attributes: ['id']
    })
})

module.exports = router;