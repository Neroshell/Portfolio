const express = require('express');
const app = express();


app.use(express.static("public"));


app.get('/', function(req, res) {

    res.sendFile(__dirname + '/index.html');

});


app.get('/about', function(req, res) {

        res.sendFile(__dirname + '/about.html');
    
    });

app.get('/work', function(req, res) {

        res.sendFile(__dirname + '/work.html');

});

app.get('/stack', function(req, res) {

        res.sendFile(__dirname + '/stack.html');
    
    });


    
app.get('/contact', function(req, res) {

    res.sendFile(__dirname + '/contact.html');

});


app.listen(3000, (function() {

        console.log("We are now listening on port 3000 " )

}));