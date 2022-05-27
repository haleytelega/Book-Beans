const router = require('express').Router();
const { BookComments } = require('../../models');

router.get('/', (req, res) => {
    BookComments.findAll()
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    // expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
    BookComments.create({
        comment_text: req.body.comment_text
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
    BookComments.destroy({
    where: {
        id: req.params.id
    }
    })
    .then(dbBookData => {
        if (!dbBookData) {
            res.status(404).json({ message: 'No comment found with this id!' });
            return;
        }
        res.json(dbBookData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;