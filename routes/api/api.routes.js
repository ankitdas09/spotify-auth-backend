// File for spotify API Requests
const router = require('express').Router()
const { isLoggedIn } = require('../../middleware/isLoggedIn')
const { topArtistsDataCleanup, topTracksDataCleanup } = require('../../utils/api.utils')
const axios = require('axios')

// Get top user's artists 
// [ {}, {}, {}, ...] array of objects
router.get('/top/artists', isLoggedIn, async (req, res) => {
    const token = `Bearer ${req.user.token}`
    try {
        const response = await axios.get("https://api.spotify.com/v1/me/top/artists", {
            headers: {
                'Authorization': token
            }
        })
        const full_data = response.data.items
        const send_data = topArtistsDataCleanup(full_data)
        res.send(send_data)
    } catch (error) {
        res.status(403).send(error.message)
    }
})

// Get top user's tracks 
// [ {}, {}, {}, ...] array of objects
router.get('/top/tracks', isLoggedIn, async (req, res) => {
    const token = `Bearer ${req.user.token}`
    try {
        const response = await axios.get("https://api.spotify.com/v1/me/top/tracks", {
            headers: {
                'Authorization': token
            }
        })
        const send_data = topTracksDataCleanup(response.data.items)
        res.send(send_data)
    } catch (error) {
        res.status(403).send(error.message)
    }
})

module.exports = router