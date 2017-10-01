'use strict'

module.exports = (sequelize, DataTypes) => {
  const Page = sequelize.define('story_table', {
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
      type: DataTypes.STRING,
      allowNull: false
    },
    page_choice2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    page_choice3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    page_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    page_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    page_update: {
      type: DataTypes.DATE,
      allowNull: false
    },
    id_story: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  });

  Page.associate = function(modles) {
    Page.belongsTo(models.Story, {
      foreighnKey: {
        allowNull: false
      }
    });
  };

  return Story;
};