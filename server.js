/*jslint devel: true*/
/*global require*/
/*global console*/
/*global document */
/*jslint node: true*/
const express = require('express');
const nodemailer = require('nodemailer');
//var generatePassword = require('password-generator');
var app = express();
/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/
  // generating random password

  // var password;
  // password = generatePassword();
var transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false, // use SSL
    port: 25, // port for secure SMTP
    auth: {
        user: 'rentaros80@gmail.com',
        pass: 'satomiren'
    },
    tls: {
        rejectUnauthorized: false
    }
});
/*------------------SMTP Over-----------------------------*/
/*------------------Routing Started ------------------------*/
app.use(express.static(__dirname + '/public'));
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
    // res.sendFile(__dirname + '/public/js/app.js');
});
app.get('/send',function(req,res){
  var mailOptions = {
      from: 'rentaros80@gmail.com',
      to: req.query.to,
      subject: 'WSR temporary credentials',
      text: req.query.text
      // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'
  };
    console.log(mailOptions);
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    //alert('mail is sent');
});

/*--------------------Routing Over----------------------------*/
var port = process.env.PORT || 3000;
app.listen(port,function(){
    console.log(`Express Started on Port ${port}`);
});
