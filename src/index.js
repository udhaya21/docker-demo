const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("build"));

app.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  next();
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
