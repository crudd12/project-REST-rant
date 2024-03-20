const router = require('express').Router()
const db = require('../models')

// retrieves all places
router.get('/', (req, res) => {
    db.Place.find()
        .then((places) => {
            res.render('places/index', { places })
        })
        .catch(error => {
            console.log('error:', error)
            res.render('error404')
        })
})

// posts a new place
router.post('/', (req, res) => {
    db.Place.create(req.body)
        .then(() => {
            res.redirect('/places')
        })
        .catch(error => {
            if (error && error.name == 'ValidationError') {
                let message = 'Validation Error: '
                for (var field in error.errors) {
                    message += `${field} was ${error.errors[field].value}. `
                    message += `${error.errors[field].message}`
                }
                res.render('places/new', { message })
            }
            else {
                res.render('error404')
            }
        })
})

// new place form
router.get('/new', (req, res) => {
    res.render('places/new')
})

// place show page
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
        .populate('comments')
        .then(place => {
            res.render('places/show', { place })
        })
        .catch(error => {
            console.log('error:', error)
            res.render('error404')
        })
})

// update existing place
router.put('/:id', (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect(`/places/${req.params.id}`)
        })
        .catch(error => {
            console.log('error:', error)
            res.render('error404')
        })
})

// delete place
router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/places')
        })
        .catch(error => {
            console.log('error:', error)
            res.render('error404')
        })
})

// edit place page
router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
        .then(place => {
            res.render('places/edit', { place })
        })
        .catch(error => {
            console.log('error:', error)
            res.render('error404')
        })
})

router.post('/:id/comment', (req, res) => {
    req.body.rant = req.body.rant ? true : false
    db.Place.findById(req.params.id)
        .then(place => {
            db.Comment.create(req.body)
                .then(comment => {
                    place.comments.push(comment.id)
                    place.save()
                        .then(() => {
                            res.redirect(`/places/${req.params.id}`)
                        })
                })
        })
        .catch(error => {
            console.log('error:', error)
            res.render('error404')
        })

})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router





// routes before we added the mongo database and had the places array with mock data
// const places = require('../models/places.js')


// // CREATE
// router.post('/', (req, res) => {
//     if (!req.body.pic) {
//         // default image if one is not provided
//         req.body.pic = 'http://placekitten.com/400/400'
//     }
//     if (!req.body.city) {
//         req.body.city = 'Anytown'
//     }
//     if (!req.body.state) {
//         req.body.state = 'USA'
//     }
//     places.push(req.body)
//     // redirects to the index route to see newly added place
//     res.redirect('/places')
// })

// // GET
// router.get('/', (req, res) => {
//     res.render('places/index', { places })
// })

// // exact matching routes (i.e.,not using variables) need to come before routes with variables
// router.get('/new', (req, res) => {
//     res.render('places/new')
// })

// router.get('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//         res.render('places/show', { place: places[id], id })
//     }
// })


// // UPDATE
// router.get('/:id/edit', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//         res.render('places/edit', { place: places[id], id })
//     }
// })

// router.put('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//         // Dig into req.body and make sure data is valid
//         if (!req.body.pic) {
//             // Default image if one is not provided
//             req.body.pic = 'http://placekitten.com/400/400'
//         }
//         if (!req.body.city) {
//             req.body.city = 'Anytown'
//         }
//         if (!req.body.state) {
//             req.body.state = 'USA'
//         }

//         // Save the new data into places[id]
//         places[id] = req.body
//         res.redirect(`/places/${id}`)
//     }
// })



// // DELETE
// router.delete('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//         places.splice(id, 1)
//         res.redirect('/places')
//     }
// })


// module.exports = router 