const express = require("express");
const router = express.Router();
const words = require("./routes/words.js");

// Register our routes
router.route("/words").get(words.getWords);
router.route('/word').post(words.postWord);

module.exports = router;

