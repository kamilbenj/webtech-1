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