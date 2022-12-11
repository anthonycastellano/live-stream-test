const express = require("express");
const bodyParser = require("body-parser")

const PORT = 8000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/auth", (req, res) => {
    if (req.body.key === "secret") return res.status(200).send();

    res.status(403).send();
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});