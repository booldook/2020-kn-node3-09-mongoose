var express = require('express');
var router = express.Router();
var User = require('../schemas/User');

router.get('/join', (req, res, next) => {
  res.render('join.pug');
});

router.put('/save', async (req, res, next) => {
	const { _id, age } = req.body;
	const result = await User.update({ _id }, { age });
	res.redirect('/user/list');
});

router.delete('/delete', (req, res, next) => {
	res.send('DELETE');
})

router.post('/save', async (req, res, next) => {
	const { userid, age } = req.body;
	const user = new User({userid, age});
	try {
		const result = await user.save();
		res.redirect('/user/list');
	}
	catch(e) {
		next(e);
	}
});

router.get('/list', async (req, res, next) => {
	const result = await User.find(/* {userid: 'booldook'} */);
	res.render('list.pug', {result});
});

router.get('/update/:id', async (req, res, next) => {
	const result = await User.find({_id: req.params.id});
	// res.json(result);
	res.render('update.pug', {result: result[0]});
});

module.exports = router;