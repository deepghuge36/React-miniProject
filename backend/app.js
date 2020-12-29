const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');


const app = express();
// we are not using this because bodyParser giving deprecate warnings
// app.use(bodyParser.urlencoded({ extend: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))


//allow the cors
app.use(cors());


// connect with database
const DBConnect = require('./Config/DBConnect');
DBConnect();

//passport middleware
require('./Config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

//routes
const start = require('./Routes/Users')
app.use('/user', start);

app.get('/', (req, res) => {
  res.send
    ("<h1>please go to <a>http://localhost:8080/user/register</a></h1>")
})


const PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
  console.log("i'm running node");
  console.log(`Server Running on ${PORT} or Click on http://localhost:${PORT}`);
});