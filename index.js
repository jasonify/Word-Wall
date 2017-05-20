const  express = require('express');
const  app = express();
const  routes = require("./routes");
const path = require('path');

app.use("/api", routes);




app.get('/', (req, res) => {
  res.sendFile( path.join(__dirname, 'public', 'index.html'));
});
// Setup static routing:
app.use("/static", express.static(path.join(__dirname, 'public')));

app.listen(3030, () => {
  console.log("We are starting the app on port 3030");
});
