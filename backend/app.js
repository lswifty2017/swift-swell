const express = require("express");

const app = express();

app.use( (req, res, next) => {
  res.send('Node Running')
});

app.use('/test', )

module.exports = app;
