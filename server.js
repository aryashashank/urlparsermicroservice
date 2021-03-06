var express = require('express');
var app = express();
var url = require('url');

app.get('/', function(){
	res.end("Go to /whoami");
});
app.get('/whoami', function(req, res){

	var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
     var info = {
         'ipaddress': ip,
         'language': req.headers["accept-language"].split(',')[0],
         'software': req.headers['user-agent'].split(') ')[0].split(' (')[1]
     };
     res.send(info);

});
app.listen(process.env.PORT || 8080, function(){
	console.log("Listening on port %d",process.env.PORT || 8080);
});