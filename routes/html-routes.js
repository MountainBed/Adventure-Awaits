var db = require("../models");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("index");
  });

  app.get("/form", function (req, res) {
    res.render("form");
  });

  app.get("/story", function (req, res) {
      res.render("story", dbStory);
  });
};
