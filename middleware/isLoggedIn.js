// middleware to check if user is logged in
const isLoggedIn = (req, res, next) => {
    // console.log(req.user)
    if (!req.user) {

        res.send('Not Logged in!')
        return
    }
    if (!req.user.token) {
        res.send('No Token found!')
        return
    }
    next()
}

module.exports = { isLoggedIn }