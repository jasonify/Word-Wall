// Our imports and libraries:
const  express = require('express');
const  app = express();
const  routes = require("./routes");
const path = require('path');
const bodyParser = require('body-parser');

// Setup our libraries
const port = process.env.PORT || 3030;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/api", routes);

// Register  static routing:
app.use("/static", express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile( path.join(__dirname, 'public', 'index.html'));
});

// Start our server..
app.listen(port, () => {
  console.log("We are starting the app on port 3030");
});
