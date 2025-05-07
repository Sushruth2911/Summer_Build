const express = require('express');
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000
const router = require('./routes/root.js');

app.use('/' , express.static(path.join(__dirname, 'public')))

app.use('/',router)

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))