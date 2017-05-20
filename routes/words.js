let words = [];
module.exports = {
  getWords: function(req, res){
    res.json({
      results: words 
    });
  },

  // Stores a word in our words list
  postWord: function(req, res){
    var word = req.body.word;
    console.log('word', word);
    words.push(word);
    // res.sendStatus(200);
    res.json({
      success: true
    });
  }
}
