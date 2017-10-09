"use strict";

module.exports = function (sequelize, DataTypes) {
  var Story = sequelize.define("Story", {
    story_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    story_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    story_description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Story.associate = function (models) {
    Story.hasMany(models.Page, {
      onDelete: "cascade",
      foreignKey: "story_id"
    });
  };

  return Story;
};
