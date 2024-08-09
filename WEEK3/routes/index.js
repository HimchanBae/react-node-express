var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  req.session.sessionid = "something";
  res.render("index", { title: "Express", sessionid: req.session.sessionid });
});

module.exports = router;
