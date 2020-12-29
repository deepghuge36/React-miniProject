const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Keys = require('../Config/Keys');
const User = require('../Models/Users')

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = Keys.secretOrKey;

module.exports = (passport) => passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => User.findById(jwt_payload.id)
    .then((user) => user ? done(null, user) : done(null, false))
    .catch((err) => console.log(err)))
);