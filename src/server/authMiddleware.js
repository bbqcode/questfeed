import passport from "passport";
import { OAuth2Strategy } from "passport-google-oauth";

import authService from "../services/authService";

var config = require("../../configs/googleAPI.json");

// Todo: serialize id only?
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

// Set up passport Google Strategy
passport.use(new OAuth2Strategy({
        clientID: config.clientID,
        clientSecret: config.clientSecret,
        // Todo: Prod url?
        callbackURL: "http://localhost:3000/auth/google/return"
    },
    function(accessToken, refreshToken, profile, done) {
        authService.authenticate(null, null, profile, null, done);
    }
));

export default {
    passport,
    auth: passport.authenticate("google", { scope: "https://www.googleapis.com/auth/plus.me" }),
    authCallback: passport.authenticate("google", { failureRedirect: "/fail", successRedirect: "/" })
};
