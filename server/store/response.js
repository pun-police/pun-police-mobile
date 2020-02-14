// ACTION TYPES
const ADD_RESPONSE = 'ADD_RESPONSE'
// const CLEAR_ALL = "CLEAR_ALL"
const LIKE = 'LIKE'
const VOTE = 'VOTE'

// ACTION CREATORS
const addResponse = response => ({type: ADD_RESPONSE, response})
const like = (userId, round) => ({type: LIKE, userId, round})
const vote = (voteGiverId, voteReceiverId, round) => ({
  type: VOTE,
  voteGiverId,
  voteReceiverId,
  round
})

// INITIAL STATE
const initialState = [] // {userId: UUID, response: "" , votes: [userId], likes: 0, round: 0, promptId: 0}

// REDUCER
const response = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESPONSE:
      if (
        !state.find(
          ({userId, round}) =>
            userId === action.response.userId && round === action.response.round
        )
      )
        return [...state, action.response]
      else return state
    case VOTE:
      if (
        state
          .filter(({round}) => round === action.round)
          .some(({votes}) => votes.includes(action.voteGiverId))
      )
        return state
      return state.map(s =>
        s.userId === action.voteReceiverId && s.round === action.round
          ? {...s, votes: [...s.votes, action.voteGiverId]}
          : s
      )
    case LIKE:
      return state.map(s =>
        s.userId === action.userId && s.round === action.round
          ? {...s, likes: s.likes + 1}
          : s
      )
    default:
      return state
  }
}

// EXPORT
module.exports = {response, addResponse, like}
