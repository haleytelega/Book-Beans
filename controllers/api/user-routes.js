const router = require('express').Router();
const { User, CoffeeComments, BookComments } = require('../../models');

router.get('/', (req, res) => {
    User.findAll({
        attributes: ['id', 'email', 'username', 'city_name'],
        include: [{
            model: CoffeeComments,
            attributes: ['comment_text']
        }]
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.post('/', (req, res) => {
    User.create({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        city_name: req.body.city_name
    })
    .then(dbUserData => {
        req.session.save(() => {
          req.session.user_id = dbUserData.id;
          req.session.username = dbUserData.username;
          req.session.loggedIn = true;
    
          res.json(dbUserData);
        });
      })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.post('/login', (req, res) => {
    
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(dbUserData => {
      if (!dbUserData) {
        res.status(400).json({ message: 'No user with that email address!' });
        return;
      }
  
      const validPassword = dbUserData.checkPassword(req.body.password);
    // const validPassword = 'user1'
  
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
    
        res.json({ user: dbUserData, message: 'You are now logged in!' });
      });
    });
  });

  router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    }
    else {
      res.status(404).end();
    }
  });

module.exports = router;