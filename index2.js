import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

// middleware sud always come b4 request handler
app.use(morgan('combined'));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
