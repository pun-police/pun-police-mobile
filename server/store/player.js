// ACTION TYPES
const ADD_PLAYER = 'ADD_PLAYER'
const UPDATE_PLAYER = 'UPDATE_PLAYER'

// ACTION CREATORS
const addPlayer = player => ({
  type: ADD_PLAYER,
  player
})

const updatePlayer = (id, score) => ({
  type: UPDATE_PLAYER,
  id,
  score
})
// INITIAL STATE
const initialState = {} // {uuid: { socketId: 0, score: 0, achievements: ""}, uuid: {}, ... }

// REDUCER
const player = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return [...state, player]
    case UPDATE_PLAYER:
      return state.map(el => {
        if (el.id === action.id) {
          el.score = action.score
        }
        return el
      })
    default:
      return state
  }
}

// EXPORT
module.exports = {player}
