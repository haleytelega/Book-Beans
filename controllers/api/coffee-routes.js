const router = require('express').Router();

router.get('/', (req, res) => {
    console.log("this is working");
});

module.exports = router;