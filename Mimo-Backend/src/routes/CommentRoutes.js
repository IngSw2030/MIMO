const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Comment = mongoose.model('Comment');

const router = express.Router();
router.use(requireAuth);


router.post('/save', async (req, res) => {
	const { content, idPost } = req.body;

	try {
		const comment = new Comment({
            content,
            idPost,
			idUser: req.user._id,
		});
		await comment.save();
		res.send({ comment });
	} catch (err) {
		res.status(422).send({ error: 'No se ha podido guardar el comentario' });
	}
});

router.post('/ofPost', async (req, res) => {
	const { idPost } = req.body;

	try {
		const comments = await Comment.find({idPost}).populate('idUser');

		res.send({ comments });
	} catch (err) {
		res.status(422).send({ error: 'No se han encontrado comentarios' });
	}
});


module.exports = router;
