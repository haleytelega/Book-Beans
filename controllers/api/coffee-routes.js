const router = require('express').Router();
const { Coffee } = require('../../models');

router.get('/', (req, res) => {
    res.json("this is working");
    Coffee.findAll({
        attributes: ['id', 'cafe_name', 'city_name']
    })
    .then(dbCoffeeData => res.json(dbCoffeeData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Coffee.create({
        cafe_name: req.body.cafe_name,
        city_name: req.body.city_name
    })
    .then(dbCoffeeData => res.json(dbCoffeeData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

module.exports = router;