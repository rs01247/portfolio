const express = require("express");
const router = express.Router();
// const emailer = require("./helpers/email.helpers");
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post("/send", (req, res) => {
    sgMail.send((req.body))
        .then(function () {
            console.log("Email Sent");
            res.send(true);
        })
        .catch(function (err) {
            console.error(err);
            res.json(err)
        })
});

module.exports = router;