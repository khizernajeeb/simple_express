const express = require('express');
const router = express.Router();
const app = express();
// predicate the router with a check and bail out when needed
router.use(function (req, res, next) {
  if (!req.headers['x-auth']) return next('router')
  next()
}, function (req, res) {
  res.send('hello, user!')
})

router.get('/', function (req, res) {
  res.send('hello, user! asass')
})





// router.get('/:id', (req, res) =>  {
//     res.send('Hello asas!')
// })

module.exports = router;