var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/hand-checker', function(req, res, next) {
	var hand = req.body;
  res.json({ hand: hand });
});
module.exports = router;
