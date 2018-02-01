var express = require('express');
var router = express.Router();

/* simpel page with input
can put in my address and send request*/

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/find', function(req, res) {
  const publicAddress = req.body.address;

  /*
  request triggers using web3 to go through finding all possible hodl ids
  and logs them to console
  */

  res.status(200).send();
});

module.exports = router;
