// ACTION TYPES
const CHANGE_PHASE = 'CHANGE_PHASE'
const CHANGE_PROMPT = 'CHANGE_PROMPT'

// ACTION CREATORS
export const changePhase = (phase, round = 0) => ({
  type: CHANGE_PHASE,
  phase,
  round
})

export const changePrompt = prompt => ({type: CHANGE_PROMPT, prompt})

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
      return {phase: action.phase, round: action.round}
    case CHANGE_PROMPT:
      return {...state, prompt: action.prompt}
    default:
      return state
  }
}

// EXPORT
module.exports = {game, changePhase}
