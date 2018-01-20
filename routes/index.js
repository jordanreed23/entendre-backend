var express = require('express');
var router = express.Router();
var db = require('../db/query');

/* GET home page. */
router.get('/', (req, res, next) => {
  db.getAll()
  .then(data => {
    res.json(data);
  })
});

router.post('/signup', (req, res, next) => {
  console.log(req.body);
  db.checkUser(req.body.username, req.body.token)
  .then(user => {
    console.log("user data after checking user:",user);
    if(user.length > 0){
      res.json(user);
    }else{
      req.body.entendres = 0;
      db.newUser(req.body)
      .then(data => {
        console.log("inserted new user", data);
        res.json(data);
      })
    }
  })
})

module.exports = router;
