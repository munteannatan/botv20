var login = require("facebook-chat-api");

var http = require('http');
http.createServer(function(req, res) {
  console.log("ping");
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end("");
}).listen(process.env.PORT || 5000);

// Create simple echo bot
login({email: process.env.FB_LOGIN_EMAIL,
    password: process.env.FB_LOGIN_PASSWORD}, (err, api) => {
    if(err) return console.error(err);

    api.listen((err, message) => {
        api.sendMessage(message.body, message.threadID);
    });
});
