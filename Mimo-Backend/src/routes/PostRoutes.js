const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Post = mongoose.model('Post');

const router = express.Router();
router.use(requireAuth);


router.post('/save', async (req, res) => {
	const { photo, title, content, tags } = req.body;
	
	try {
		const post = new Post({
            photo,
            title,
            content,
			tags,
			dateCreated: Date.now(),
			idUser: req.user._id,
			poster: req.user.name
		});
		await post.save();
		res.send({ post });
	} catch (err) {
		res.status(422).send({ error: 'No se ha podido guardar el post' });
	}
});

router.get('/myPosts', async (req, res) => {
    try {
        const posts = await Post.find({idUser: req.user._id}).populate('idUser');
        res.send({ posts });
    } catch (err) {
        res.status(422).send({ error: "No se han encontrado post para el usuario" });
    }
});

router.post('/allPosts', async (req, res) => {
	const { term, tags } = req.body;
	let newTerm, newTags;

	if (!tags) {
		if (!term) {
			newTerm = '';
		} else {
			newTerm = term;
		}
	} else {
		newTerm = '-1';
	}

	!tags ? (newTags = '-1') : (newTags = tags);

	try {
		const posts = await Post.find({
			$or: [
				{ title: { $regex: newTerm, $options: 'i' } },
				{ content: { $regex: newTerm, $options: 'i' } },
				{ tags: { $in: [newTags] } },
			],
		}).populate('idUser').sort({dateCreated: -1}).limit(25);

		res.send({ posts });
	} catch (err) {
		res.status(422).send({ error: 'No se han encontrado productos' });
	}
});

router.post('/update', async (req, res) => {
    try {
        
        const { photo, title, content ,id } = req.body;

        const post = await Post.findOne({ _id: id });

		let newTitle, newContent, newPhoto;

		!title ? (newTitle = post.title) : (newTitle = title);

		!content ? (newContent = post.content) : (newContent = content);

		!photo ? (newPhoto = post.photo) : (newPhoto = photo);

		await Post.findOneAndUpdate(
			{ _id: id },
			{
				$set: {
					title: newTitle,
					content: newContent,
					photo: newPhoto,
				},
			},
			{ useFindAndModify: false }
		);
		res.send('Modificado satisfactoriamente');
	} catch (err) {
		return res.status(422).send({ error: 'Error al modificar' });
	}
});

router.post('/delete', async (req, res) => {
	const { id } = req.body;

	try {
		await Post.findByIdAndDelete(id);
		res.send('Post borrado satisfactoriamente');
	} catch (error) {
		return res.status(422).send({ error: 'Error eliminando el post' });
	}
});

module.exports = router;
