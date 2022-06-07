const router = require('express').Router();
const { BookComments, Book, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    BookComments.findAll({
    attributes: ['id', 'book_text'],
        include: [{
            model: Book,
            attributes: ['bookClub_name']
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
    // expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
    BookComments.create({
        book_text: req.body.book_text,
        book_id: req.body.book_id,
        user_id: req.session.user_id
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
    BookComments.destroy({
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