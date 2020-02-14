const {createStore, combineReducers} = require('redux')

const {game, changePhase} = require('./game')
const {player, addPlayer, updatePlayer} = require('./player')
const {response, addResponse, like} = require('./response')

const reducer = combineReducers(game, player, response)

const makeStore = () => createStore(reducer)

module.exports = {
  makeStore,
  changePhase,
  addPlayer,
  updatePlayer,
  addResponse,
  like
}
