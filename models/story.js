'use strict'

module.exports = function(sequelize, DataTypes) {
  const Story = sequelize.define('Story', {
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
  }, {
    classMethods: {
      associate: function(models) {
        Story.hasMany(models.Page, {
          onDelete: "cascade"
        });
      }
    }
  });

  return Story;
};