var db = require("../models");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("index");
  });

  app.get("/form", function (req, res) {
    res.render("form");
  });

  app.get("/page/:id", function (req, res) {
    db.Page.findOne({
      where: {
        page_id: req.params.id
      },
      include: [db.Story]
    }).then(function (dbPage) {
      switch (dbPage.story_id) {
        case 1:
          dbPage.story_id = "Sci-Fi";
          break;
        case 2:
          dbPage.story_id = "Mystery";
          break;
        case 3:
          dbPage.story_id = "Vampires";
          break;
        case 4:
          dbPage.story_id = "Adventure";
          break;
      }
      var handlebars = {
        data: dbPage.dataValues
      };
      res.render("story", handlebars);
    });
  });
};
