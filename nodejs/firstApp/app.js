const http = require('http');
const os = require('os');
let userName = os.userName;
let userInfo = os.userInfo;
    
http.createServer(function(request, response){
    response.end("Hello NODE");
}).listen(3000, '127.0.0.1', function(){
    console.log(`homedir = ${userInfo().homedir}`);
    console.log(userInfo().username.replace('_', ' '));
    
    console.log('Начато прослушивание порта #3000')
})