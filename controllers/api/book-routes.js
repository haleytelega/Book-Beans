const router = require('express').Router();
const { Book } = require('../../models');

router.get('/', (req, res) => {
  Book.findAll()
    .then(dbBookData => res.json(dbBookData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {

  if (req.session) {
  Book.create({
    add_text: req.body.book_text,
    post_id: req.body.post_id,
    user_id: req.session.user_id
  })
    .then(dbBookData => res.json(dbBookData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
  }
});

router.delete('/:id', (req, res) => {
  Book.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbBookData => {
      if (!dbBookData) {
        res.status(404).json({ message: 'No book club found with this id!' });
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
