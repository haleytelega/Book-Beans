const router = require('express').Router();
const { Add } = require('../../models');

router.get('/', (req, res) => {
  Add.findAll()
    .then(dbAddData => res.json(dbAddData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {

  if (req.session) {
  Add.create({
    add_text: req.body.add_text,
    post_id: req.body.post_id,
    user_id: req.session.user_id
  })
    .then(dbAddData => res.json(dbAddData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
  }
});

router.delete('/:id', (req, res) => {
  Add.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbAddData => {
      if (!dbAddData) {
        res.status(404).json({ message: 'No book club found with this id!' });
        return;
      }
      res.json(dbAddData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  
});

module.exports = router;
