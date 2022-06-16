const router = require('express').Router()
const passport = require('passport')

router.get('/login', (req, res) => {
    res.redirect('/auth/spotify')
})

router.get('/logout', (req, res) => {
    req.logout()
    req.session.destroy()
    res.send({ 'message': 'Logged Out' })
})

router.get('/login/success', (req, res) => {
    console.log(req.user)
    if (!req.user) {
        res.status(403).json({ message: "not logged in" })
        return
    } else {
        res.status(200).send(req.user)
    }
})

router.get('/error', (req, res) => {
    // req.logOut
    res.send('error')
})

router.get('/spotify', passport.authenticate('spotify', {
    scope: ['user-read-email', 'user-read-private', 'user-top-read']
}))

router.get('/spotify/callback',
    passport.authenticate('spotify', {
        failureRedirect: "/auth/error",
        successRedirect: "http://localhost:3000/"
    })
)


module.exports = router