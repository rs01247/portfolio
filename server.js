require("dotenv").config();
const express = require("express");
const routes = require("./api/routes")
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 8080;
const app = express();

// LOGGER
app.use(morgan('dev'))

// BODY PARSER FOR AJAX
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

// STATIC ASSETS WHEN PUSHED TO HEROKU
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// ROUTING 
app.use("/api", routes);


app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
    console.log(`Listening on Port ${PORT}`);
})