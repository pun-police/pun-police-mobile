// ACTION TYPES
const CHANGE_PHASE = 'CHANGE_PHASE'

// ACTION CREATORS
const changePhase = (phase, round = 0, prompt) => ({
  type: CHANGE_PHASE,
  phase,
  round,
  prompt
})

// INITIAL STATE
const initialState = {
  state: 'lobby', // lobby, intro, << prompt, respond, vote, results >>, finish
  prompt: {}, // {id, text}
  round: 0 // max 3 (number of rounds)
}

// REDUCER
const game = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PHASE:
      return {phase: action.phase, prompt: action.prompt, round: action.round}
    default:
      return state
  }
}

// EXPORT
module.exports = {game, changePhase}
