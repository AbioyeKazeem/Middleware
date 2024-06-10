import express from "express";
import bodyParser from "body-parser"; // importing bodyParser module after installed 

// this 3 lines below are required to return a response relating to path specified on Node. 
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// mount the middleware using Express .use() method and create a body for url-encoded requests like 
// form submission using .urlencoded({extended : true})
// alwys call this method b4 any router
app.use(bodyParser.urlencoded({extended : true}));

// get route
app.get("/", (req, res) => {
//console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

// post route
app.post('/submit', (req,res) =>{
  console.log(req.body);
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
