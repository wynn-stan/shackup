const router = require('express').Router();
const fs = require('fs'); 
const path = require('path');

let societies_data = fs.readFileSync(path.join(__dirname,"societies_data.json"));
societies_data = JSON.parse(societies_data);

let events_data = fs.readFileSync(path.join(__dirname,"events_data.json"));
events_data = JSON.parse(events_data);

router.route("/societies").get(
    (req,res) => {
        res.send(societies_data);
    }
);

router.route("/events").get(
    (req,res) => {
        res.send(events_data);
    }
);

module.exports.router = router;

// setup lists of societies
// setup lists of events
// for now mix both

// setup getting and recieving societies data
// setup getting and recieving events data

// setup rendering events data
// setup rendering societies data

// push to github
// connect heroku to github

// publish online
// market on whatsapp.

// subscribe to newsletter
