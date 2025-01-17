import express from "express";

const app = express();
const port = 4000;


// my custom middleware logger
function logger (req,res,next){
  console.log('Request Method":',req.method);
  console.log('Request URL:',req.url);
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hi am designing my own custom middleware");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
