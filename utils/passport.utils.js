const passport = require('passport')
const SpotifyStrategy = require('passport-spotify').Strategy
require('dotenv').config()
passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})
passport.use(
    new SpotifyStrategy(
        {
            //options
            clientID: process.env.CLIENTID,
            clientSecret: process.env.CLIENTSECRET,
            callbackURL: "http://localhost:8080/auth/spotify/callback"
        }, (accessToken, refreshToken, profile, done) => {
            //callback function
            done(null, { token: accessToken, display_name: profile._json.display_name })
        }
    )
)
