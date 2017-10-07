var db = require("../models");

module.exports = function (app) {
  app.get("/api/story", function (req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Story.findAll({
      include: [db.Page]
    }).then(function (dbStory) {
      res.json(dbStory);
    });
  });

  app.get("/api/story/:id", function (req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
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
