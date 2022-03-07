
# NODEMAILER SEND MAILS

This nodejs library, is able to send emails just by integrating in your node project.



## Check installation

 - [Npm Nodemailer](https://www.npmjs.com/package/nodemailer)
 - [Nodemailer Versions](https://www.npmjs.com/package/nodemailer?activeTab=versions)
 - [Installation Npm](https://nodejs.org/en/)

## Installation

Install in your project with npm

```bash
  cd my-project
  npm install nodemailer
```
    
## 🚀 About Me
I'm a full stack developer , 
I'm from Brasília DF.  I love studying and networking


## 🛠 Skills
Javascript, HTML, CSS, NodeJs, MYSQL, PHP, JAVA, SpringBoot, SQLite, React, Angular, Express...


## Usage/Examples

```javascript
//import lib
const nodemailer = require('nodemailer');

//Example Gmail settings account host
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587, //Porta Gmail SMTP (TLS)
    secure: false, // if your smtp contains SSL/TLS, change true 
    auth:{
        user: 'examplehost@gmail.com',
        pass: 'pass_your_account'
    }
});

//sendMAil will send the email
transporter.sendMail({
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
```

