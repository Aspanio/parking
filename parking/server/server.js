const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const port = 3000;
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(urlencodedParser);
app.use(bodyParser.json());

app.get("/api", function(req, res, next) {
  res.json(parking)
  });

app.post('/api',urlencodedParser, function(req, res) {
  parking[req.body.id -1].isEmpty = req.body.isEmpty
})

let parking = [
    {
        id: 1, 
        angle: "rotate(90deg)",
        x:100,
        y:100,
        isEmpty: false,
    },
    {
        id: 2, 
        angle: "rotate(90deg)",
        x:100,
        y:640,
        isEmpty: true,
    },
    {
        id: 3, 
        angle: "rotate(0deg)",
        x:240,
        y:60,
        isEmpty: true,
    },
    {
        id: 4, 
        angle: "rotate(0deg)",
        x:400,
        y:60,
        isEmpty: true,
    },
    {
        id: 5, 
        angle: "rotate(90deg)",
        x:100,
        y:280,
        isEmpty: true,
    },
    {
        id: 6, 
        angle: "rotate(90deg)",
        x:100,
        y:460,
        isEmpty: true,
    },
];

app.listen(port, ()=>console.log("listening on port 3000"))