const express = require('express')
const router = require('./handles')

const app = express()
app.use(router)

app.listen(8080)