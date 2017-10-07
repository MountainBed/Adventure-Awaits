"use strict";

module.exports = function (sequelize, DataTypes) {
  var Page = sequelize.define("Page", {
    page_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    page_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    page_text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    page_choice1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    page_choice_text1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    page_choice2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    page_choice_text2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    page_choice3: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    page_choice_text3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    page_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    page_parent_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    story_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  });

  Page.associate = function (models) {
    Page.belongsTo(models.Story, {
      foreignKey: "story_id"
    });
  };

  return Page;
};
