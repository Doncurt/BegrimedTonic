
/*Nodemon is being used to detect any server channges*/
/*Using handlebars as a templating engine*/
/*express for restful routine of resources*/
var express = require('express');
/* An instance of the express module with the name app*/
var app = express();
/*importing the express handle bars templating ingine with object name exhbs*/
var exphbs = require('express-handlebars');
/*Sets the templating engine as well as makes the main layout( to be on every page) file 'main'*/
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
/*sets the file extension to.handlebars*/
app.set('view engine', 'handlebars');
/*Home page route get request*/
app.get('/',(req,res) => {
  res.render('home', {msg:['Gucci','Mane',2017,'Donovan adams']})
});
/*Sets the port listen( aka use) any request coming from port 3000( what where setting it to)*/
app.listen(3000,() => {
  console.log("just making sure!");
});
