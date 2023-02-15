const { DataTypes } = require('sequelize')
const sequelize = require('../config/database.js')

const Activity = sequelize.define('Activity', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: 'activity_id',
  },
  title: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'updated_at',
  },
  deletedAt: {
    type: DataTypes.DATE,
    field: 'deleted_at'
  },
}, {
  underscored: true,
  paranoid: true,
  timestamps: true,
});

module.exports = Activity