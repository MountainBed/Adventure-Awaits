'use strict'

module.exports = (sequelize, DataTypes) => {
  const Page = sequelize.define('page_table', {
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
      allowNull: false
    },
    page_choice_text1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    page_choice2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    page_choice_text2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    page_choice3: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    page_choice_text3: {
      type: DataTypes.STRING,
      allowNull: false
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
    page_parent_id: {
      type: DataTypes.INTEGER,
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

  Page.associate = function(models) {
    Page.belongsTo(models.Story, {
      foreighnKey: {
        allowNull: false
      }
    });
  };

  return Story;
};