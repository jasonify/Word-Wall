let express = require("express");
let router = express.Router();
let words = require("./routes/words.js");
router.route("/words").get(words.getWords);

module.exports = router;

