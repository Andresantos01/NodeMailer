//import lib
const nodemailer = require('nodemailer');

//Example Gmail settings account host
let transforter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587, //Porta Gmail SMTP (TLS)
    secure: false, // if your smtp contains SSL/TLS, change true 
    auth:{
        user: 'examplehost@gmail.com',
        pass: 'pass_your_account'
    }
});

//sendMAil will send the email
transforter.sendMail({
    from: 'Your name  <examplehost@gmail.com>',
    to: 'example@gmail.com',
    subject: 'Title of message',
    text: 'Body, write your content here',
    html: 'testing messag with nodemailer',
    attachments:[
        {filename: 'example.JEP',path: './example.JPG'}
    ],
 
}).then(message =>{
    console.log(message)
}).catch(err =>{
    console.log(err)
});