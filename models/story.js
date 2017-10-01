'use strict'

module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('story_table', {
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
    },
    story_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    story_update: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });

  Story.associate = function(models) {
    Story.hasMany(models.Page, {
      onDelete: "cascade";
    });
  };
  return Story;
};