url =
  "mongodb+srv://himchanbae:Ehfkdpahd94!@cluster0.b0rbj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");

let userInformation = [
  { name: "michael", value: 50 },
  { name: "phill", value: 80 },
];

mongoose.set("strictQuery", false);

mongoose.connect(url);
const userSchema = new mongoose.Schema({ user: String, info: String });

const UserInfo = mongoose.model("user", userSchema);

/* GET home page. */
router.get("/", function (req, res, next) {
  //req.session.sessionid = "something";

  UserInfo.find({}).then((result) => {
    res.render("index", {
      title: "Express",
      sessionid: req.session.sessionid,
      userInformation: result,
    });
  });

  console.log("I reached here");
});

router.post("/", function (req, res) {
  console.log(req.body.cookievalue);
  req.session.sessionid = req.body.cookievalue;
  res.redirect("/");
});

router.post("/UserInformation", function (req, res) {
  // console.log(req.body.value, req.body.value);
  // userInformation.push({ name: req.body.value, value: req.body.value });

  const userInfo = new UserInfo({
    user: req.body.user,
    info: req.body.value,
  });

  userInfo.save();

  res.redirect("/");
});

module.exports = router;
