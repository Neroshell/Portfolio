const express = require('express');
const app = express();
const ejs = require('ejs');


app.use(express.static("public"));
app.use(express.urlencoded({ extended : true }));

app.set('view engine', "ejs");


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

app.post('/contact', function(req, res) {

    const firstName = req.body.firstname;
    const email = req.body.email;
    const message = req.body.message;


    res.render("thanks", {firstname:firstName});
});


app.get("/thanks", (req, res) => {

        res.render("thanks");

})


app.listen(3000, (function() {

        console.log("We are now listening on port 3000 " )

}));