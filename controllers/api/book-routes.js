const router = require('express').Router();
const { Book, BookComments } = require('../../models');

router.get('/', (req, res) => {
  Book.findAll({
    attributes: ['id', 'bookClub_name', 'city_name', 'meeting_weekday', 'meeting_time'],
    include: [{
      model: BookComments,
      attributes: ['book_text']
    }]
  })
    .then(dbBookData => res.json(dbBookData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  Book.create({
    bookClub_name: req.body.bookClub_name,
    city_name: req.body.city_name,
    meeting_weekday: req.body.meeting_weekday,
    meeting_time: req.body.meeting_time,
    user_id: req.body.user_id
  })
    .then(dbBookData => res.json(dbBookData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
  }
);

router.put('/:id', (req, res) => {
  Book.update(req.body, {
      individualHooks: true,
      where: {
          id: req.params.id
      }
  })
  .then(dbBookData => {
      if (!dbBookData[0]) {
      res.status(404).json({ message: 'No book found with this id' });
      return;
  }
      res.json(dbBookData);
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
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
