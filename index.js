const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

//set static path
app.use(express.static(path.join(__dirname, "clients")));


app.use(bodyParser.json());

const publicVapidKey ='BESub91NdY5JSaPNIPt2usL3J1kXOHaLnjcCKO6F5MR-1nz5TZcT506m947bWzYTOOiv3J0zC8MYBpL8KGZPgVw';

const privateVapidKey= 'NFjsDyv0dBvO3YfJ22DzWC5G2u3eO-EAJyXRGDkVPmU';

webpush.setVapidDetails('mailto:isabella0484@gmal.com', publicVapidKey, privateVapidKey);

//Subscribe Route
app.post('/subscribe', (req, res) => {
    //Get pushSubcription object

    const subscription =req.body;

    //Send 111 - resourse created
    res.status(201).json({});

    // Create payload
    const payload =JSON.stringify({title: 'Push Test'});
    //Pass object into sendNotification
    webpush.sendNotification(subscription, payload).catch(err => console.error(err));


});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));