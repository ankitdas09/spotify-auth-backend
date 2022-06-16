// imports and config
const express = require('express')
const passport = require('passport')
const cookieSession = require('cookie-session')
const cors = require('cors')
require('dotenv').config()
require('./utils/passport.utils')

// routes
const authRoutes = require('./routes/auth/auth.routes')
const apiRoutes = require('./routes/api/api.routes')

// port
const PORT = process.env.PORT || 5000

// app setup
const app = express()
app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}))

app.use(cookieSession({
    name: "session",
    keys: ["testest"]
}))

app.set('trust proxy', 1)
app.use(passport.initialize())
app.use(passport.session())

// route setup
app.use('/auth', authRoutes)
app.use('/api', apiRoutes)


// test auth route
app.get('/', (req, res) => {
    // console.log(req.user)
    if (!req.user) {
        res.send('Not logged in')
        return
    } else {
        res.send(req.user)
    }
})

app.listen(PORT, () => {
    console.log(`App Listening on PORT:${PORT}`)
})