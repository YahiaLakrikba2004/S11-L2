import { REMOVE_FAVORITE } from '../actions/action'

const initialState = {
  content: [],
}

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_FAVORITE:
      return {
        ...state,
        content: state.content.filter(company => company !== action.payload),
      }
    default:
      return state
  }
}

export default favoritesReducer
