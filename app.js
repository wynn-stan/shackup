const express = require('express');
const app = express();

app.use('/public', express.static("./src/public"));
app.use("/dev", express.static("./src/dev-dependencies"));

app.get("/", (req,res) => {
    res.redirect("/public/index.html");
    res.end();
})

app.listen(3000, () => {
    console.log('Listening on Port 3000')
})