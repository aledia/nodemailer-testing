const express = require('express');
const router  = express.Router();
const nodemailer = require("nodemailer");

router.post('/send-email', (req, res, next) => {
  let { email, subject, message } = req.body;
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'madwebmar19@gmail.com',
      pass: 'iron2019'
    }
  });
  transporter.sendMail({
    from: '"My Awesome Project 👻" <bill.gates@ironhack.com>',
    to: email, 
    subject: subject, 
    text: message,
    html: `<b>${message}</b>`
  })
  .then(info => res.json({email, subject, message, info}))
  // .catch(error => console.log(error));
});

module.exports = router;
