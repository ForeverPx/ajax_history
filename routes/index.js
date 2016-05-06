var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hash',function(req, res, next){
  res.locals._layoutFile = 'layout.html';
  res.render('hash', {});
});

module.exports = router;
