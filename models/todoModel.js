const { DataTypes } = require('sequelize')
const sequelize = require('../config/database.js')

const Todo = sequelize.define('Todo', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: 'todo_id',
  },
  activity_group_id: {
    type: DataTypes.STRING,
  },
  title: {
    type: DataTypes.STRING,
  },
  priority: {
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

module.exports = Todo