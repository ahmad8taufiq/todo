const { DataTypes } = require('sequelize')
const sequelize = require('../config/database.js')

const Todo = sequelize.define('todo', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: 'todo_id',
  },
  activity_group_id: {
    type: DataTypes.INTEGER,
  },
  title: {
    type: DataTypes.STRING,
  },
  priority: {
    type: DataTypes.STRING,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
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

module.exports = Todo