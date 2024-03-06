require('dotenv').config()
const express = require('express')
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

//wildcard route --> has to be below all routes or it will override other pages
app.get('*', (req, res) => {
    res.render('error404')
})

// Listen for connections
app.listen(process.env.PORT)

