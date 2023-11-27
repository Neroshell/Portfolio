const express = require('express');
const app = express();
const ejs = require('ejs');
const nodemailer = require('nodemailer');
const _ = require('lodash'); 
const port = process.env.PORT || 3000


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

    const firstName =  _.capitalize(_.lowerCase(req.body.firstname));
    const email = req.body.email;
    const message = req.body.message;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'dummywithnero@gmail.com', // Your Gmail email address
            pass: 'krox wmba ilzk ugmo' // Your Gmail password
        }
    });

    let mailOptions = {
        from: 'dummywithnero@gmail.com', // Sender address (should be your Gmail email address)
        to: 'neromustlearn@gmail.com', // Recipient address
        subject: 'New Form Submission',
        text: `First name: ${firstName}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        res.render("thanks", {firstname:firstName});
    });
});



app.get("/thanks", (req, res) => {

        res.render("thanks");

})


app.listen(port, (function() {

        console.log("We are now listening on port 3000 " )

}));