const express = require('express');
const app = express();
const data = require('./src/database/data');
require('dotenv').config();

app.use('/data', data.router);

app.use('/public', express.static("./src/public"));
app.use("/dev", express.static("./src/dev-dependencies"));

app.get("/", (req,res) => {
    res.redirect("/public/index.html");
    res.end();
});

app.listen(process.env.PORT, () => {
    console.log('Listening on Port 3000')
})