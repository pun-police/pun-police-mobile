// ACTION TYPES
const CHANGE_PHASE = 'CHANGE_PHASE'

// ACTION CREATORS
const changePhase = (phase, round = 0) => ({
  type: CHANGE_PHASE,
  phase,
  round
})

// INITIAL STATE
const initialState = {
  state: 'lobby', // lobby, intro, << prompt, respond, vote, results >>, finish
  round: 0 // max 3 (number of rounds)
}

// REDUCER
const game = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PHASE:
      return {phase: action.phase, round: action.round}
    default:
      return state
  }
}

// EXPORT
module.exports = {game, changePhase}
