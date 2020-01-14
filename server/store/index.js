const {createStore, combineReducers} = require('redux')

const {game} = require('./game')
const {player} = require('./player')
const {response} = require('./response')

const reducer = combineReducers(game, player, response)

const store = createStore(reducer)

module.exports = {store}
