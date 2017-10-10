var db = require("../models");

module.exports = function (app) {
  app.get("/api/story", function (req, res) {
    db.Story.findAll({
      include: [db.Page]
    }).then(function (dbStory) {
      res.json(dbStory);
    });
  });

  app.get("/api/story/:id", function (req, res) {
    db.Story.findOne({
      where: {
        story_id: req.params.id
      },
      include: [db.Page]
    }).then(function (dbStory) {
      res.json(dbStory);
    });
  });

  app.post("/api/story", function (req, res) {
    db.Story.create(req.body).then(function (dbStory) {
      res.json(dbStory);
    });
  });

  app.delete("/api/story/:id", function (req, res) {
    db.Story.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbStory) {
      res.json(dbStory);
    });
  });
};
