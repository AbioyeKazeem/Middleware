import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 5000;
var bandName = "";


app.use(bodyParser.urlencoded({extended : true}));

// My custom middleware
function bandGenerator(req, res, next){
  console.log(req.body);
  bandName = req.body['street'] + " " + req.body['pet'];
  next();
}

app.use(bandGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});


app.post('/submit', (req, res) => {
  res.send(`<h3>My band name is: </h3> <h4> ${bandName} </h4>`);
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
