const router = require('express').Router()
const places = require('../models/places.js')


// GET
router.get('/', (req, res) => {
    res.render('places/index', { places })
})

// exact matching routes (i.e.,not using variables) need to come before routes with variables
router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/show', { place: places[id], id })
    }
})

router.get('/:id/edit', (req, res) => {
    // let id = Number(req.params.id)
    res.render('places/edit')
})

// CREATE
router.post('/', (req, res) => {
    if (!req.body.pic) {
        // default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    // redirects to the index route to see newly added place
    res.redirect('/places')
})

// DELETE
router.delete('/:id', (req, res) => {
    res.send('delete stub route')
})

module.exports = router 