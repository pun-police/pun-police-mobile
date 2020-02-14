const uuid = require('uuid/v4')
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
    })

    socket.on('response', response => {
      // player responds to prompt
    })

    socket.on('like', (userId, round) => {
      // player likes a prompt
    })
  })
}
