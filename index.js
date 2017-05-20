let express = require('express');
var app = express();
var routes = require("./routes");

app.use("/api", routes);
app.get('/', (req, res) => {
  res.send("Hello world2!");
});

app.listen(3030, () => {
  console.log("We are starting the app on port 3030");
});
