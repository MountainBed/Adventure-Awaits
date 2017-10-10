var db = require("../models");
var bot = require("../slackbot/johnsteinbot.js");

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

  app.get("/nextpage/:genre/:pageid/:pagechoice", function (req, res) {
    if (parseInt(req.params.pagechoice) === 0) {
      var formObject = {
        data: {
          story_id: req.params.genre,
          page_parent_id: req.params.pageid
        }
      };
      res.render("form", formObject);
    } else {
      res.redirect("/page/" + req.params.pagechoice);
    }
  });

  app.post("/:genre/:parentpage", function (req, res) {
    console.log(req.body);
    var newPage = {
      page_text: req.body.page_text,
      page_choice_text1: req.body.page_choice_text1,
      page_choice_text2: req.body.page_choice_text2,
      page_parent_id: req.params.parentpage
    };

    switch (req.params.genre) {
      case "Sci-Fi":
        newPage.story_id = 1;
        break;
      case "Mystery":
        newPage.story_id = 2;
        break;
      case "Vampires":
        newPage.story_id = 3;
        break;
      case "Adventure":
        newPage.story_id = 4;
        break;
    }
    bot.botUpdate(req.params.genre);
    db.Page.create(newPage).then(function (dbPage) {
      console.log(dbPage);
      res.redirect("/page/" + dbPage.page_id);
    });
  });
};
