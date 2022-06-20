// middleware to check if user is logged in
const isLoggedIn = (req, res, next) => {
    if (!req.body.token) {
        res.send('Not Logged in!')
        return
    }
    next()
}

module.exports = { isLoggedIn }