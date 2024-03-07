const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [
        {
            name: 'H-Thai-ML',
            city: 'Seattle',
            state: 'WA',
            cuisines: 'Thai, Pan-Asian',
            pic: '/images/thai_food.jpg'
        }, {
            name: 'Coding Cat Cafe',
            city: 'Phoenix',
            state: 'AZ',
            cuisines: 'Coffee, Bakery',
            pic: '/images/bakery.jpg'
        }
    ]
    res.render('places/index', { places })
})

// exact matching routes (i.e.,not using variables) need to come before routes with variables
router.get('/new', (req, res) => {
    res.render('places/new')
})

// router.get('/:id', (req, res) => {
//     // res.render('')
// })

router.post('/', (req, res) => {
    res.send('POST /places stub')
})

module.exports = router 