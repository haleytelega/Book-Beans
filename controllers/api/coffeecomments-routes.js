const router = require('express').Router();
const { CoffeeComments, Coffee, User } = require('../../models');
const withAuth = require('../../utils/auth.js');

router.get('/', (req, res) => {
    CoffeeComments.findAll({
        attributes: ['id', 'comment_text'],
        include: [{
            model: Coffee,
            attributes: ['cafe_name']
        }, 
        {
            model: User,
            attributes: ['username']
        }
        ]
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
    CoffeeComments.create({
        comment_text: req.body.comment_text,
        coffee_id: req.body.coffee_id,
        user_id: req.body.user_id
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
    CoffeeComments.destroy({
    where: {
        id: req.params.id
    }
    })
    .then(dbCommentData => {
        if (!dbCommentData) {
            res.status(404).json({ message: 'No comment found with this id!' });
            return;
        }
        res.json(dbCommentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;