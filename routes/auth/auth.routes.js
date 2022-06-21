// AUTH ROUTES

const router = require('express').Router()
const passport = require('passport')

// redirects to /login/spotify
router.get('/login', (req, res) => {
    res.redirect('/auth/spotify')
})

// not working yet
router.get('/logout', (req, res) => {
    req.logout()
    req.session.destroy()
    res.send({ 'message': 'Logged Out' })
})


// FRONTEND CALLS HERE FOR USER DETAILS
router.get('/login/success', (req, res) => {
    console.log(req.user)
    if (!req.user) {
        res.status(403).json({ message: "not logged in" })
        return
    } else {
        res.status(200).send(req.user)
    }
})

// ERROR ROUTE
router.get('/error', (req, res) => {
    // req.logOut
    res.send('error')
})

// REDIRECTS TO OFFICIAL SPOTIFY LOGIN PAGE
router.get('/spotify', passport.authenticate('spotify', {
    scope: ['user-read-email', 'user-read-private', 'user-top-read']
}))

// CALLBACK FUNTION (SEE ../utils/passport.utils.js)
router.get('/spotify/callback',
    passport.authenticate('spotify', {
        failureRedirect: "/auth/error",
        successRedirect: "http://localhost:8080/"
    })
)


module.exports = router