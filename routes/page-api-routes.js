// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/pages", function(req, res) {
    var query = {};
    console.log(req.query);
    console.log(req.body);
    console.log(req.query.id_story);
    if (req.query.id_story) {
      query.StoryId = req.query.id_story;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Page.findAll({
      where: query,
      include: [db.Story]
    }).then(function(dbPage) {
      res.json(dbPage);
    });
  });

  // Get rotue for retrieving a single post
  app.get("/api/pages/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Page.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Story]
    }).then(function(dbPage) {
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