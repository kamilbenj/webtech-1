const fs = require('fs')
const path = require('path')
const express = require('express')
const router = express.Router()
const db = require('./db');
const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res) => {
    const name = req.query.name;
    if (!name)
    {
        res.send('hello takes a name query parameter (hello?name=[name]), if the parameter is a random name, it will reply reply hello [name], if the parameter is my name (Kamil), it will reply with a short intro of myself')
    }

    else if (name === 'kamil')
    {
        return res.send('Hello, my name is Kamil, I am 20 years old, I study Cybersecurity in ECE Paris')
    }

    res.send ('hello ' + name)
})

//GET /articles - list all articles
router.get('/articles', (req, res) => {
  res.json(db.articles)
})

//POST /articles - add a new article
router.post('/articles', (req, res) => {
  const {title, content, author } = req.body;

  if (!title || !content || !author) {
    return res.status(400).json({ error: 'title, content and author are required' });
  }

  const newArticle = {
    id : uuidv4(),
    title,
    content,
    date: Date.now(),
    author
  };

  db.articles.push(newArticle);
  res.status(201).json(newArticle);
});

//GET /articles/:articleId - get an article by ID
router.get('/articles/:articleId', (req, res) => {
  const articleId = req.params.articleId;
  const article = db.articles.find(a => a.id == articleId);
  if (!article) {
    return res.status(404).json({ error: 'Article not found' })
    }
  res.json(article);
})

//GET /articles/:articleId/comments - get all comments of the article with articleId
router.get('/articles/:articleId/comments', (req, res) => {
  const articleId = req.params.articleId;
  const comment = db.comments.filter(a => a.articleId == articleId);
  if (!comment) {
    return res.status(404).json({ error: 'Article not found' })
    }
  res.json(comment);
})

//POST /articles/:articleId/comments - add a new comment to a specific article with articleId
router.post('/articles/:articleId/comments', (req, res) => {
    const articleId = req.params.articleId;
    const { content, author } = req.body;

  if (!content || !author) {
    return res.status(400).json({ error: 'content and author are required' });
  }

  const newComment = {
    id: uuidv4(),
    timestamp: Date.now(),
    content,
    articleId,
    author,
  };

  db.comments.push(newComment);
  res.status(201).json(newComment); // 201 = Created
});

//GET /articles/:articleId/comments/:commentId - get a comment with commentId of the article with articleId
router.get('/articles/:articleId/comments/:commentId', (req, res) => {
  const articleId = req.params.articleId;
  const commentId = req.params.commentId;
  const comment = db.comments.find(a => a.id == commentId && a.articleId == articleId);
  if (!comment) {
    return res.status(404).json({ error: 'Article not found' })
    }
  res.json(comment);
})

router.get('/:slug', (req, res) => {
    const slug = req.params.slug
    const filename = path.join(__dirname, 'content', slug + '.json')

    if (fs.existsSync(filename)) 
    {
        const data = fs.readFileSync(filename, 'utf8')
        res.json(JSON.parse(data))
    } 
    else 
    {
        res.status(404).send({ error: 'File not found' })
    }
})

module.exports = router