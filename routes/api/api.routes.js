// File for spotify API Requests

// **********
// CURRENTLY EMPTY 
// **********

const router = require('express').Router()
const { isLoggedIn } = require('../../middleware/isLoggedIn')

const axios = require('axios')

// router.post('/top', isLoggedIn, (req, res) => {
//     const response = axios.get("https://api.spotify.com/v1/me/top/tracks", {
//         headers: {
//             'Authorization': 'Bearer'
//         }
//     })
// })

module.exports = router