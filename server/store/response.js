// ACTION TYPES
const ADD_RESPONSE = 'ADD_RESPONSE'
// const CLEAR_ALL = "CLEAR_ALL"
const LIKE = 'LIKE'

// ACTION CREATORS
const addResponse = response => ({type: ADD_RESPONSE, response})
const like = (userId, round) => ({type: LIKE, userId, round})

// INITIAL STATE
const initialState = [] // {userId: UUID, response: "" , likes: 0, round: 0, promptId: 0}

// REDUCER
const response = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESPONSE:
      return [...state, action.response]
    case LIKE:
      return state.map(s =>
        s.userId === action.userId ? {...s, likes: s.likes + 1} : s
      )
    default:
      return state
  }
}

// EXPORT
module.exports = {response}
