const express = require('express');
const router = express.Router();

//@Route GET api/posts/test
//@Desc  Tests posts route
//@Access Public
router.get('/test', (req, res) => console.log(res.json({ msg: 'Posts API' })));

module.exports = router;
