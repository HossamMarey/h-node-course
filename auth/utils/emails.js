
const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');

const sendEmail = async (email, subject, text) => {

  const transport = nodemailer.createTransport(
    nodemailerSendgrid({
      apiKey: process.env.SENDGRID_API_KEY
    })

  );

  transport.sendMail({
    from: email,
    to: 'hmarey@ymail.com',
    subject: subject,
    html: ` <h1>
    ${text}
    </h1> `
  }).then(() => {

    console.log('Email sent')
  }).catch((error) => {
    console.log('Send email', error)
  })

}


module.exports = { sendEmail }