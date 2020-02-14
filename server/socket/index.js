const uuid = require('uuid/v4')
const {addPlayer, updatePlayer, addResponse, like} = require('../store')

// io emit
// TO HOST:
// join
// quit
// response -> {response[]}
// vote -> {response[]}
// results -> {response[]}
// TO ALL/SPECIFIC CLIENT:
// round change
// intro
// prompt -> {prompt}
// respond
// vote -> {response[]}
// results
// response confirmation
// vote confirmation
// like confirmation
// score updates and likes

module.exports = io => {
  io.on('connection', socket => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)

    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`)
    })

    // HOST ACTIONS

    socket.on('create', () => {
      // host creates game -->
      // generates a game id and sends back to host
    })

    socket.on('start', gameId => {
      // host starts game
    })

    // PLAYER ACTIONS

    socket.on('join', gameId => {
      // player joins room
      io.emit('join').to(host)
    })

    socket.on('response', response => {
      // player responds to prompt
    })

    socket.on('like', (userId, round) => {
      // player likes a prompt
    })
  })
}
