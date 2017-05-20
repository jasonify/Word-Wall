module.exports = {
  getWords: function(req, res){
    res.json({
      results: ["one", "two", "three"]
    });
  }
}
