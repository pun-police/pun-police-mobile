// ACTION TYPES

// ACTION CREATORS

// INITIAL STATE
const initialState = {
  state: 'lobby', // lobby, intro, << prompt, respond, vote, results >>, finish
  round: 0 // max 3 (number of rounds)
}

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

// EXPORT
module.exports = {reducer}
