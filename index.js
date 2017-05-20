const  express = require('express');
const  app = express();
const  routes = require("./routes");
const path = require('path');

app.use("/api", routes);

// Setup static routing:
app.use("/static", express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.send("Hello world3!");
});

app.listen(3030, () => {
  console.log("We are starting the app on port 3030");
});
