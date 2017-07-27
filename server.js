const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));
app.post('/signUp', function(req, res){
  res.render();
})

app.listen(4500, function(){
  console.log("Form app is listening on port 4500");
})
