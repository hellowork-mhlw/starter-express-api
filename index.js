const express = require('express')

const nodemailer = require("nodemailer");





const app = express()
app.all('/', async (req, res) => {

console.log(nodemailer)
if (process.env.MAIL_HOST) {
    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: 465,
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      });
        // send mail with defined transport object
  await transporter.sendMail({
    from: '"Fred Foo 👻" <'+process.env.MAIL_USER+'>', // sender address
    to: "osaka.niconico@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  }).then(console.log).catch(console.error);

}


    console.log("Just got a request2!")
    res.send('Yo2!')
})
app.listen(process.env.PORT || 3000)
