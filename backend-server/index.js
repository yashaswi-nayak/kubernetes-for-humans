//importing node framework
var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var cors = require('cors');


app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())
//Respond with "hello world" for requests that hit our root "/"
app.get('/my-data', function (req, res) {
    res.json({
        message: 'hello world'
    });
});

//listen to port 3000 by default
app.listen(process.env.PORT || 3000, function (req, res) {
    console.log('LISTENING ON 3000');
});

module.exports = app;