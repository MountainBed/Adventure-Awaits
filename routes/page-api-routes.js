var db = require("../models");

module.exports = function (app) {
  // Get all pages
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
  // Get one page
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

  // // POST route for saving a new post
  // app.post("/api/page", function(req, res) {
  //   db.Page.create(req.body).then(function(dbPage) {
  //     res.json(dbPage);
  //   });
  // });

  // // DELETE route for deleting posts
  // app.delete("/api/page/:id", function(req, res) {
  //   db.Page.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbPage) {
  //     res.json(dbPage);
  //   });
  // });

  // // PUT route for updating posts
  // app.put("/api/page", function(req, res) {
  //   db.Page.update(
  //     req.body, {
  //       where: {
  //         id: req.body.id
  //       }
  //     }).then(function(dbPage) {
  //     res.json(dbPage);
  //   });
  // });
};
