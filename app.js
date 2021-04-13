// require('dotenv').config(); //11

var express = require('express'); //4
var app = express(); //4
var event = require('./controllers/eventcontrollers');
var sequelize = require('./db'); //8-3

app.use(express.json());
app.use(require('./middleware/headers'));
// app.use('/user', user);//9

// app.use(require('./middleware/validate-session'));
app.use('/event', event);
sequelize.sync();
app.listen(3000, function(){
    console.log('App is listening on 3000.')
});

app.use('/api/test', function(req, res){
    res.send("This is a test")
})