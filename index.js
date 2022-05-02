const fs = require("fs");
const port = process.env.PORT || 7000;
const express = require('express');
const app = express();
const fetch = require('node-fetch');

let result;
fs.readFile(`${__dirname}/api.json/`, "utf-8", (err, data) => {
  result = data;
  app.get("/api", (req, res) => {
    res.json(data);
  })
});

fs.readFile(`${__dirname}/users.json/`, "utf-8", (err, data) => {
  result = data;
  app.get("/users/", (req, res) => {
    res.json(data);
  })
});

fs.readFile(`${__dirname}/users.json/`, "utf-8", (err, data) => {
  app.get("/users/:id/", (req, res) => {
    for (i = 0; i < JSON.parse(data).length; i++) {
      if (JSON.parse(data)[i].id === parseInt(req.params.id)) {
        res.json(JSON.parse(data)[i])
      }
    }
  });
})

app.listen(port, () => {
  console.log(`Listening at port ${port}!`);
});