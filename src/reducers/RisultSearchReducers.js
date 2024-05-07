import { ARRAY_SEARCH } from '../actions/action'

const initialState = {
  searches: { content: [] },
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARRAY_SEARCH:
      return {
        ...state,
        searches: {
          content: [...state.searches.content, ...action.payload],
        },
      }

    default:
      return state
  }
}

export default searchReducer
