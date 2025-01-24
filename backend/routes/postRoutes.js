const express = require('express');
const router = express.Router();
const Post = require('../models/postModel');

// Create a new blog post
router.post('/', async (req, res) => {
    const { title, content } = req.body;
    const newPost = new Post({ title, content, createdAt: new Date() });
    await newPost.save();
    res.status(201).json(newPost);
});

// Get all blog posts
router.get('/', async (req, res) => {
    const posts = await Post.find();
    res.status(200).json(posts);
});

// Search blog posts by title
router.get('/search/:query', async (req, res) => {
    const query = req.params.query;
    const posts = await Post.find({ title: { $regex: query, $options: 'i' } });
    res.status(200).json(posts);
});

// Get a single blog post by ID
router.get('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(post);
});

// Update a blog post
router.put('/:id', async (req, res) => {
    const { title, content } = req.body;
    const post = await Post.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
    if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(post);
});

// Delete a blog post
router.delete('/:id', async (req, res) => {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json({ message: 'Post deleted' });
});

module.exports = router;