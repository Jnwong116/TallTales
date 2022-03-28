"use strict";
const log = console.log

const env = process.env.NODE_ENV;

const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const { mongoose } = require("./db/mongoose");

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
    const pageRoutes = ["/"];
    if (!pageRoutes.includes(req.url)) {
        res.status(404);
    }

    res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(port, () => {
    log(`listening on port ${port}...`);
});