const fs = require('fs')
const path = require('path')
const express = require('express')
const router = express.Router()

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


