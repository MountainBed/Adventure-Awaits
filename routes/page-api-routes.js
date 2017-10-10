var db = require("../models");

module.exports = function (app) {
  app.get("/api/pages", function (req, res) {
    var query = {};
    if (req.query.story_id) {
      query.StoryId = req.query.story_id;
    }
    db.Page.findAll({
      where: query,
      include: [db.Story]
    }).then(function (dbPage) {
      res.json(dbPage);
    });
  });

  app.get("/api/page/:id", function (req, res) {
    db.Page.findOne({
      where: {
        page_id: req.params.id
      },
      include: [db.Story]
    }).then(function (dbPage) {
      res.json(dbPage);
    });
  });
};
