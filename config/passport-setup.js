const passport=require('passport')
const keys=require('./keys')
const GoogleStrategy=require('passport-google-oauth20')

passport.use(
    new GoogleStrategy({
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.GOOGLE_CLIENTID,
        clientSecret: keys.google.GOOGLE_SECRETKEY
    },(accessToken,refreshToken,profile,done)=>{
        console.log(profile)
    })
)