module.exports = {
  getWords: function(req, res){
    res.json({
      results: ["one", "two", "three"]
    });
  },

  postWord: function(req, res){
    res.json({
      success: true
    });

  }
}
