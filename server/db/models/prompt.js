const Sequelize = require('sequelize')
const db = require('../db')

const Prompt = db.define('prompt', {
  headline: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  byline: {
    type: Sequelize.STRING
  }
})

module.exports = Prompt
