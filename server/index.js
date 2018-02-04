const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = 5050;
app.listen( port, () => {
    console.log("listening on port", port)
})