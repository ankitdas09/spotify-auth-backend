// File for spotify API Requests

const router = require('express').Router()
const { isLoggedIn } = require('../../middleware/isLoggedIn')

const axios = require('axios')

// Get top user's artists 
// response data : [ {...data}, {}, {}, ...] array of objects
router.get('/top/artists', isLoggedIn, async (req, res) => {
    const token = `Bearer ${req.user.token}`
    try {
        const response = await axios.get("https://api.spotify.com/v1/me/top/artists", {
            headers: {
                'Authorization': token
            }
        })
        res.send(response.data.items)
    } catch (error) {
        res.status(403).send(error.message)
    }
})

// Get top user's tracks 
// response data : [ {...data}, {}, {}, ...] array of objects
router.get('/top/tracks', isLoggedIn, async (req, res) => {
    const token = `Bearer ${req.user.token}`
    try {
        const response = await axios.get("https://api.spotify.com/v1/me/top/tracks", {
            headers: {
                'Authorization': token
            }
        })
        res.send(response.data.items)
    } catch (error) {
        res.status(403).send(error.message)
    }
})

// Get top spotify recommendations 
// response data : [ {...data}, {}, {}, ...] array of objects
// router.get('/recommendations', isLoggedIn, async (req, res) => {
//     const token = `Bearer ${req.user.token}`
//     const response = await axios.get("https://api.spotify.com/v1/recommendations", {
//         headers: {
//             'Authorization': token
//         }
//     })
//     res.send(response.data.items)
// })


module.exports = router