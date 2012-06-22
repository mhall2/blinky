var app = require('express').createServer();

app.get('/', function(req, res){
  res.send('sup from blinky');
});

app.listen(3000);