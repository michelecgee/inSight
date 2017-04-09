var express = require('express');
var router = express.Router();

var accountSid = 'ACd5e98e37663e42507bc0ae80547bda57';
var authToken = 'b2c2a1e368ea26263c72880c7c89431d';

var twilio = require('twilio');
var client = new twilio.RestClient(accountSid, authToken);
var msg = "Look Out! Something is ahead of you.";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

function sendText(text, receiver, callback) {
    client.messages.create({
        body: text,
        to: receiver,
        from: '14154032108'
    }, function (err, message) {
        callback(err, message);
    });
}

router.post('/', function (req, res) {
    console.log(req);
    var vibrate = req.body.values;
    sendText(msg, '14159870073', (err, message) => {
        console.log('sent text to phone');
    });

    res.send();
});

module.exports = router;
