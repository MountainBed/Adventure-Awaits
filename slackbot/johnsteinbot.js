"use strict";

var Botkit = require("botkit");

var controller = Botkit.slackbot({
  debug: false
});

var johnsteinbot = {
  botListen: function () {
    controller.spawn({
      token: "xoxb-249110244977-QCRVtIvKQiuxuQciT8VXon16"
    }).startRTM();

    controller.hears("hello", ["direct_message", "direct_mention", "mention"], function (bot, message) {
      bot.reply(message, "Sorry. I am too busy reading awesome stories to respond.");
    });

    controller.hears("What is my password?", ["direct_message", "direct_mention", "mention"], function (bot, message) {
      bot.reply(message, "Self\n...\nIt is JavaOne!2005, of course!");
    });

    controller.hears("What do you do?", ["direct_message", "direct_mention", "mention"], function (bot, message) {
      bot.reply(message, "I send updates when new stories are added to Adventure Awaits!");
    });

    controller.hears("What are your current genres?", ["direct_message", "direct_mention", "mention"], function (bot, message) {
      bot.reply(message, "Mystery! Sci-fi! Vampires! Adventure!...not horror");
    });
  },
  botUpdate: function (str) {
    str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    controller.spawn({
      token: "xoxb-249110244977-QCRVtIvKQiuxuQciT8VXon16"
    }).startRTM();

    controller.on({type: "hello"}, function (bot, message) {
      bot.api.chat.postMessage({"channel": "general", "text": "An update was made to the " + str + " genre. See for yourself at <https://www.google.com/>.", "username": "johnsteinbot", "icon_url": "https://imgur.com/dXa3b9q", "as_user": "true"}, function (err, res) {
        if (err) {
          console.log("Error: ", err);
        } else {
          console.log("Message sent: ", res);
        }
        bot.destroy();
      });
    });
  }
};

module.exports = johnsteinbot;
